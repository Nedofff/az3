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
  const { nameValue, surnameValue, phoneValue, emailValue, commentValue } =
    body;

  const transporter = createTransport({
    service: "yandex",
    host: "smtp.yandex.email",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });


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
  const result = await transporter.sendMail({
    from: `<${process.env.NODEMAILER_USER}>`,
    to: `${process.env.NODEMAILER_USER}`,
    subject: "Заявка с формы на сайте",
    text: "Something",
    html: mailBody,
  });
  return NextResponse.json(true);
}
