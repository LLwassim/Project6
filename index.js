const express = require('express')
const app = express()
const parser = require('body parser')
app.use(parser.json)
const countries = require('./models/Countries')

app.get('/Countries', function(req, res){
    countries.find({}).then(countries => {
        res.json(countries)
    })
})

app.listen(3000,() => console.log("listening"))