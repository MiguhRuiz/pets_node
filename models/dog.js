const mongoose = require('mongoose')
require('mongoose-relationships')

const DogModel = new mongoose.Schema({
    name: String,
    birthday: Date
})

DogModel.belongsTo('User')

module.exports = mongoose.model('Dog', DogModel)