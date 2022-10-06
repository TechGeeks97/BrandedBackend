const res = require("express/lib/response");

const sendGridMail = require("@sendgrid/mail");
sendGridMail.setApiKey(
  "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"
);

function getMessage() {
  const body = "This is a test email using SendGrid from Node.js";
  return {
    to: "noumansaeed54@gmail.com",
    from: "silxstudiosx@gmail.com",
    subject: "Test email with Node.js and SendGrid",
    text: body,
    html: `<strong>${body}</strong>`,
  };
}
async function sendEmail() {
  try {
    let res = await sendGridMail.send(getMessage());
    console.log("Test email sent successfully", res);
  } catch (error) {
    console.error("Error sending test email");
    console.error(error);
    return error;
    if (error.response) {
      console.error(error.response.body);
    }
  }
}
// (async () => {
//   console.log("Sending test email");
//   await sendEmail();
// })();
module.exports = sendEmail;
