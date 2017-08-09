const mongoose = require('mongoose')
require('mongoose-relationships')
const User = require('./owner')

const CatModel = new mongoose.Schema({
    name: String,
    birthday: Date,
    owner: mongoose.Schema.ObjectId
})

CatModel.belongsTo('User')

module.exports = mongoose.model('Cat', CatModel)