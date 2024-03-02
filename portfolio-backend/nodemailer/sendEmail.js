const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: "lorenzo40@ethereal.email",
//     pass: "Lorenzo Beatty",
//   },
// });

// // async..await is not allowed in global scope, must use a wrapper
// const _sendEmail =  async function main() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '"Lorenzo Beatty 👻" <lorenzo40@ethereal.email>', // sender address
//     to: "lorenzo40@ethereal.email", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }


// module.exports = _sendEmail

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gsimphiwe212@gmail.com',
        pass: 'adwzqklepnisasgj'
    }
})

let details = {
    from: 'gsimphiwe212@gmail',
    to: 'nsimphiwe556@gmail.com',
    subject: 'Testing nodemailer',
    text: 'Testing our first sender'
}

module.exports = mailTransporter

// const result = mailTransporter.sendMail(details, (err) => {
//     if(err) {
//         console.log('It has an error', err)
//     }else {
//         console.log('Messege send successfully')
//     }
// })

// module.exports = result
