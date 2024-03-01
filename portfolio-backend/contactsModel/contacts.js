const moongose = require('mongoose')

const Contact = new moongose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, lowercase: true, index: {unique: true}},
    cellNumber: {type: Number, required: true},
    comment: {type: String, required: true}
})

module.exports = moongose.model('Contact', Contact)
