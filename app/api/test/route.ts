import { questionsForEmail } from "@/components/Modals/TestModal.data";
import { NextResponse } from "next/server";
import { createTestAccount, createTransport } from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = createTransport({
    service:'yandex',
    host: "smtp.yandex.email",
    port: 465,
    secure: false,
    auth: {
    user: 'Ed.Novikov.D@yandex.ru',
    pass: process.env.NODEMAILER_PASS,
    },
  });

  const answers = body.answers;

  const mainMailBody = questionsForEmail.map(
    (quest:any, index:number) =>
      `<tr>
          <td>${quest}</td>
          <td>${answers[`${index + 1}`]}</td>
      </tr>\n`
  ).join("");

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
        <td>Электронная почта</td>
        <td>${body.email}</td>
    </tr>
    ${mainMailBody}
</table>
`;
  const result = await transporter.sendMail({
    from: '"Eduard" <Ed.Novikov.D@yandex.ru>',
    to: "Ed.Novikov.D@yandex.ru",
    subject: "Test",
    text: "Hello world",
    html: mailBody,
  });
  return NextResponse.json(true);
}