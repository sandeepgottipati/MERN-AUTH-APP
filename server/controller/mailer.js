import nodemailer from 'nodemailer'
import Mailgen from 'mailgen'
import ENV from '../config.js'


let mailConfig = {
    service: 'gmail',
    auth: {
        user: ENV.EMAIL,
        pass: ENV.PASSWORD
    }
}

let transporter = nodemailer.createTransport(mailConfig);
let MailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: 'MailGen',
        link: 'https://mailgen.js'
    }

})
/**POST: http://localhost:5174/api/registerMail
 * @param:{
 * "username":"example123",
 * "userEmail":"admin123",
 * "text":"",
 * "subject":""
 * }
 */
export const registerMail = async (req, res) => {
    const { userName, userEmail, text, subject } = req.body;
    let email = {
        body: {
            name: userName,
            intro: text || "Welcome to MERN AUthentication.",
            outro: 'Need help , or have question?? Just Reply to this email , we\'d love to help.'

        }
    }
    let emailBody = MailGenerator.generate(email);
    let message = {
        from: ENV.EMAIL,
        to: userEmail,
        subject: subject || "Signup Successful",
        html: emailBody
    }
    transporter.sendMail(message).then(() => res.status(200).send({ msg: "You should receive an email from us." })).catch(error => res.status(500).send({ error }))
}
