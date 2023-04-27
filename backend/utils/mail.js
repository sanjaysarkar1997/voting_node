let nodemailer = require("nodemailer");
let smtpTransport = require("nodemailer-smtp-transport");

const nodeMailer = async (
  receiptMail,
  { subject = "E-Voting", text = "Testing" }
) => {
  let userMail = "keedacoding@gmail.com";
  let userPass = "Sanjay@1997";
  let appPass = "vfmbeyrxpsfagjyx";
  let htmlTemplate = `<p>This is tag P</p>`;
  let host = "smtp.gmail.com";
  let service = "gmail";

  let mailOptions = {
    from: userMail,
    to: receiptMail,
    subject: subject,
    text: text,
    // html: htmlTemplate,
  };

  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: service,
      host: host,
      auth: {
        user: userMail,
        pass: appPass,
      },
    })
  );

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error", error);
      return error;
    } else {
      return info.response;
    }
  });
};

module.exports = nodeMailer;
