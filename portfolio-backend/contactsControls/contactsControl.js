const Contact = require('../contactsModel/contacts')
const nodemailer = require("nodemailer");
const dotenv = require('dotenv')


const sendFeedback = (req) => {
    
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gsimphiwe212@gmail.com',
            pass: 'adwzqklepnisasgj'
        }
    })

    let details = {
        from: 'gsimphiwe212@gmail.com',
        to: `${req.body.email}`,
        subject: 'Comment received',
        text: `Hey ${req.body.name}, Your comment was received. Thank you for reaching out. ` 
    }

    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log('It has an error', err)
        } else {
            console.log('Messege send successfully')
        }
    })
}

const sendComment = (req) => {
    
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gsimphiwe212@gmail.com',
            pass: 'adwzqklepnisasgj'
        }
    })

    let details = {
        from: 'gsimphiwe212@gmail.com',
        to: 'gsimphiwe212@gmail.com',
        subject: 'New comment',
        text: JSON.stringify(req.body)
    }

    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log('It has an error', err)
        } else {
            console.log('Messege send successfully')
        }
    })
}

module.exports = {
    addComment: async (req, res) => {

        console.log(req.body)
        try {
            let payload = req.body
            console.log(payload)
            let comment = Contact(payload)
            let _res = await comment.save()
            console.log(_res)
            res.status(201).send(payload)
            sendFeedback(req)
            sendComment(req)
        }
        catch (err) {
            console.log(err)
            res.status(503).send({ Error: 'We ran into an error' })
        }
    }
}