const Users = require('../users/users-model')
const express = require('express')
const { users } = require('../../data/Users')

function validateUserCredentials(req, res) {
    const { username, password } = req.body
    if(users.username !== username || users.password !== password) {
        res.status(422).json({ message: 'Wrong username or password'})
    } else {
        res.status(200).json({ message: `Welcome back, ${username}`})
    }
}

module.exports = {
    validateUserCredentials
}