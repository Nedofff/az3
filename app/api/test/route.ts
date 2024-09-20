import { UserFormData } from "@/components/Modals/FormTest/EndTest/EndTest.types";
import { questionsForEmail } from "@/components/Modals/TestModal.data";
import { sendEmailSelf } from "@/service/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body: UserFormData = await req.json();
  const answers = body.answers;

  const mainMailBody = questionsForEmail
    .map(
      (quest: any, index: number) =>
        `<tr>
          <td>${quest}</td>
          <td>${answers[`${index + 1}`]}</td>
      </tr>\n`
    )
    .join("");

  const mailBody = `От: ${body.name} ${body.email}
<table>
    <tr>
        <td>Имя</td>
        <td>${body.name}</td>
    </tr>
    <tr>
        <td>ИНН компании</td>
        <td>${body.INN}</td>
    </tr>
    <tr>
        <td>Номер телефона</td>
        <td>${body.phoneNumber}</td>
    </tr>
    <tr>
        <td>Электронная почта</td>
        <td>${body.email}</td>
    </tr>
    ${mainMailBody}
</table>
`;
  console.log("create done");
  try {
    await sendEmailSelf({
      subject: "Заявка из теста на сайте",
      html: mailBody,
    });
    console.log("send done");
    return NextResponse.json({});
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
