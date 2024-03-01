const express = require('express')
const routes = require('./contactsRoute/route')
const cors = require('cors')
const app = express()

app.use(express.json())

const PORT = 3000

app.use(cors())

const moongose = require('mongoose')

moongose.connect('mongodb://127.0.0.1:27017/portfolioDB')
    .then((res) => console.log('Connection is successfully'))
    .catch((err) => console.log('MongoDB ran into an error'))

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
})

app.use(routes)