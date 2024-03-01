const Contact = require('../contactsModel/contacts')

module.exports = {
    addComment: async (req, res) => {
        console.log(req.body)
        try {
            let payload = req.body
            console.log(payload)
            let comment = Contact(payload)
            let _res = await comment.save()
            console.log(_res)
            res.status(201).send('Comment added successfuly')
        }
        catch(err) {
            console.log(err)
            res.status(503).send({Error: 'We ran into an error'})
        }
    } 
}