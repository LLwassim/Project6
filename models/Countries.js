const mongoose = require('../db/Connection')

const Schema = mongoose.Schema

const Countries = new Schema ({
    name: String,
    capital: String,
    region: String,
    subregion: String,
    population: Number,
    flag:String

})


module.exports = mongoose.model('Countries', Countries)