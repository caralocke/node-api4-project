const shortid = require('shortid')
const { users } = require('../../data/Users')

module.exports = {
    async findAll() {
        return users
    },

    async create({ name, password }) {
        const newUser = { id: shortid.generate(), name, password }
        users.push(newUser)
        return newUser
    }
}