const shortid = require('shortid')
const { users } = require('../../data/Users')

module.exports = {
    async findAll() {
        return users
    },

    async create({ username, password }) {
        const newUser = { id: shortid.generate(), username, password }
        users.push(newUser)
        return newUser
    }
}