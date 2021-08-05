const express = require('express')
const User = require('./users-model')
const { users } = require('../../data/Users')
const router = express.Router()
const shortid = require('shortid')
router.get('/users', (req, res) => {
    // res.status(200).json(users)
    User.findAll()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
} )

router.post('/register', (req, res) => {
    const newUser = {
        id: shortid.generate(),
        name: req.body.name,
        password: req.body.password
    }
    users.push(newUser)

    res.status(201).json(newUser)
})

module.exports = router