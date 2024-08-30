import { questionsForEmail } from "@/components/Modals/TestModal.data";
import { sendEmailSelf } from "@/service/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
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
        <td>Электронная почта</td>
        <td>${body.email}</td>
    </tr>
    ${mainMailBody}
</table>
`;
  try {
    await sendEmailSelf({
      subject: "Заявка из теста на сайте",
      html: mailBody,
    });
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.error();
  }
}

// import { questionsForEmail } from "@/components/Modals/TestModal.data";
// import { NextResponse } from "next/server";
// import { createTransport } from "nodemailer";
// import type SMTPTransport from "nodemailer/lib/smtp-transport";

// export async function POST(req: Request) {
//   const body = await req.json();

//   /** Настоящий */
//   // const auth = {
//   //   user: process.env.NODEMAILER_USER
//   //   pass: process.env.NODEMAILER_PASS,
//   // };

//   /** Тестовый */
//   const auth = {
//     user: "",
//     pass: "",
//   };

//   const transportOptions: SMTPTransport.Options = {
//     host: "smtp.yandex.ru",
//     port: 465,
//     secure: true,
//     auth,
//   };
//   console.log("transportOptions", transportOptions);

//   try {
//     const transporter = createTransport(transportOptions);

//     const answers = body.answers;

//     const mainMailBody = questionsForEmail
//       .map(
//         (quest: any, index: number) =>
//           `<tr>
//           <td>${quest}</td>
//           <td>${answers[`${index + 1}`]}</td>
//       </tr>\n`
//       )
//       .join("");

//     const mailBody = `От: ${body.name} ${body.email}
// <table>
//     <tr>
//         <td>Имя</td>
//         <td>${body.name}</td>
//     </tr>
//     <tr>
//         <td>ИНН компании</td>
//         <td>${body.INN}</td>
//     </tr>
//     <tr>
//         <td>Электронная почта</td>
//         <td>${body.email}</td>
//     </tr>
//     ${mainMailBody}
// </table>
// `;
//     console.log("create is ok");
//     const result = await transporter.sendMail({
//       from: `"Заявка с сайта" <${auth.user}>`,
//       to: `${auth.user}`,
//       subject: "Заявка из расчёта стоимости на сайте",
//       text: "Something",
//       html: mailBody,
//     });
//     console.log(result);
//     return NextResponse.json(result.accepted);
//   } catch (error) {
//     console.error("ERROR CREATE TRANSPORT", error);
//     return NextResponse.error();
//   }
// }
