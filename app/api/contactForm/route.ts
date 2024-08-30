import { sendEmailSelf } from "@/service/nodemailer";
import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(req: Request) {
  const body = (await req.json()) as {
    nameValue: string;
    surnameValue: string;
    phoneValue: string;
    emailValue: string;
    commentValue: string;
  };
  console.log("get body", body);
  const { nameValue, surnameValue, phoneValue, emailValue, commentValue } =
    body;

  const mailBody = `От: ${nameValue} ${surnameValue} ${emailValue}
<table>
    <tr>
        <td>Имя</td>
        <td>${nameValue} ${surnameValue}</td>
    </tr>
    <tr>
        <td>Электронная почта</td>
        <td>${emailValue}</td>
    </tr>
    <tr>
        <td>Номер телефона</td>
        <td>${phoneValue}</td>
    </tr>
    <tr>
        <td>Комментарий</td>
        <td>${commentValue}</td>
    </tr>
</table>
`;

  try {
    await sendEmailSelf({
      subject: "Заявка с формы на сайте",
      html: mailBody,
    });
    return NextResponse.json({
      isOk: true,
    });
  } catch (error) {
    return NextResponse.error();
  }
}
