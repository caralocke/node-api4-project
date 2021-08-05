require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const usersRouter = require('./users/users-router')

const server = express()



server.use(cors())
server.use(express.json())
server.use(helmet())

server.use('/api', usersRouter)

server.get('/', (req, res) => {
    res.send(`<h1>node api4 project </h1>`)
})
server.use('*', (req, res) => {
    res.status(500).json({ message: ''})
})

module.exports = server