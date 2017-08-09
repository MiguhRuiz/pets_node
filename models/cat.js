const mongoose = require('mongoose')
require('mongoose-relationships')

const CatModel = new mongoose.Schema({
    name: String,
    birthday: Date
})

CatModel.belongsTo('User')

module.exports = mongoose.model('Cat', CatModel)