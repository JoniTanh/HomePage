const formData = require("form-data");
const Mailgun = require("mailgun.js");
const config = require("../utils/config");

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: config.MAILGUN_API_KEY });

const sendEmail = async (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  const emailData = {
    from: `noreply@${config.DOMAIN}`,
    to: config.EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    text: `You have received a new message from the contact form.\n\nName: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\n\nMessage: ${message}`,
  };

  try {
    const response = await client.messages.create(config.DOMAIN, emailData);
    res
      .status(200)
      .send({ message: "Email sent successfully", body: response });
  } catch (error) {
    res.status(500).send({ message: "Error sending email", error });
  }
};

module.exports = { sendEmail };
