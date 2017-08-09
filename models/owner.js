const mongoose = require('mongoose')
require('mongoose-relationships')
const Dog = require('./dog')
const Cat = require('./cat')

const UserModel = new mongoose.Schema({
    name: String,
    dogs: [mongoose.Schema.ObjectId],
    cats: [mongoose.Schema.ObjectId]
})

UserModel.hasMany('Dog')
UserModel.hasMany('Cat')

module.exports = mongoose.model('Owner', UserModel)