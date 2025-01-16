import nodemailer from "nodemailer";
const CONTACT_EMAIL_PASSWORD = "xtkp bhdd suqv xtrh";
async function POST({ request }) {
  const { email, name, message } = await request.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abanyseka98@gmail.com",
      pass: CONTACT_EMAIL_PASSWORD
    }
  });
  const mailOptions = {
    from: email,
    to: "abansekasly98@gmail.com",
    subject: `Website Contact From ${name}`,
    text: `mail from berikids contact form:

Name: ${name}
Email (${email}):

${message}`
  };
  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), {
      status: 200
    });
  } catch (err) {
    console.log("Error sending email", err);
    return new Response(JSON.stringify({ success: false }), {
      status: 500
    });
  }
}
export {
  POST
};
