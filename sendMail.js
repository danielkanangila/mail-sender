const nodemailer = require("nodemailer");
const _ = require("lodash");

const renderTemplate = (template, data) => {
  const complied = _.template(template);
  return complied({ ...data });
};

const sendMail = ({ from, to, subject, template, data }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const html = renderTemplate(template, data);

  const mailOption = { from, to, subject, html };

  return transporter.sendMail(mailOption);
};

module.exports = sendMail;
