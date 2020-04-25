const fs = require("fs");
const sendMail = require("../sendMail");
const path = require("path");

const templatePath = path.resolve(__dirname, "template.html");
const HTMLTemplate = fs.readFileSync(templatePath).toString();

const mailOptions = {
  from: "noreply@oldkora.co.za",
  to:
    "daniel.kanangila@gmail.com, kkanangila@live.fr, daniel.kanangila@icloud.com",
  subject: "Verify Your Email - TEST",
  template: HTMLTemplate,
  data: { name: "Daniel Kanangila", verificationCode: 778553 },
};

sendMail(mailOptions)
  .then((res) => {
    console.log(res.response);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });
