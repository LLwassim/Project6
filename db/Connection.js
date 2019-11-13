mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/countries_db", {
    useNewUrlParser: true
})
//creating database in mongoose called "countries_db"
module.exports = mongoose;