const express = require('express')
const User = require('./users-model')
const { users } = require('../../data/Users')
const router = express.Router()
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
    if (!req.body.username || !req.body.password) {
        res.status(422).json({ message: 'username and password are required' })
      } else {
        User.create(req.body)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(err => {
                res.status(500).json({ message: err.message})
            })
    }
})

module.exports = router