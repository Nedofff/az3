const nodemailer = require("nodemailer");

const NODEMAILER_USER = "";
const NODEMAILER_PASS = "";

const sendEmail = (mailOptions) =>
  new Promise((resolve, reject) =>
    nodemailer
      .createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
          user: NODEMAILER_USER,
          pass: NODEMAILER_PASS,
        },
      })
      .sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      })
  );

sendEmail({
  from: `Some <ed.novikov.d@yandex.ru>`,
  to: `ed.novikov.d@yandex.ru`,
  subject: "Заявка с формы на сайте",
  text: "Something",
  html: `<div>kek</div>`,
})
  .then(console.log)
  .catch(console.error);
