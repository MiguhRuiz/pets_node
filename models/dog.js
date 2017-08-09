const mongoose = require('mongoose')
require('mongoose-relationships')
const User = require('./owner')

const DogModel = new mongoose.Schema({
    name: String,
    birthday: Date,
    owner: mongoose.Schema.ObjectId
})

DogModel.belongsTo('User')

module.exports = mongoose.model('Dog', DogModel)