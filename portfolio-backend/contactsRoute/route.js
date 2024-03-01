const express = require('express')
const router = express.Router()

const contactControls = require('../contactsControls/contactsControl')

router.post('/add-comments', contactControls.addComment)

module.exports = router