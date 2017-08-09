const mongoose = require('mongoose')
require('mongoose-relationships')

const UserModel = new mongoose.Schema({
    name: String
})

UserModel.hasMany('Dog')
UserModel.hasMany('Cat')

module.exports = mongoose.model('User', UserModel)