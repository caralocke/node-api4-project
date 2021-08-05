require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(cors())
server.use(express.json())
server.use(helmet())

server.get('/', (req, res) => {
    res.send(`<h1>node api4 project </h1>`)
})

module.exports = server