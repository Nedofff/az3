import { createTransport } from "nodemailer";

type MailData = {
  subject: string;
  html: string;
  text?: string;
};

export const sendEmailSelf = (mailData: MailData) =>
  new Promise((resolve, reject) =>
    createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    }).sendMail(
      {
        from: `ap-audit.ru <${process.env.NODEMAILER_USER}>`,
        to: process.env.NODEMAILER_USER,
        text: "Произошла ошибка",
        ...mailData,
      },
      (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      }
    )
  );
