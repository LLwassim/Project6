const express = require('express')
const app = express()
const parser = require('body-parser')
app.use(parser.json)
const countries = require('./models/Countries')

app.get('/Countries', function (req, res) {
    countries.find({}).then(countries => {
        res.json(countries)
    })
})


app.get("/Countries/:name", function (req, res) {
    countries.findOne({ name: req.params.id }).then(countries => {
        res.json(countries);
    });
});

app.post("/Countries", function (req, res) {
    countries.create(req.body).then(countries => {
        res.json(countries);
    });
});

app.put("/Countries/:name/item", function (req, res) {
    countries.findByIdAndUpdate(
        req.params.id,
        { $push: { items: req.body } },
        { new: true }
    ).then(countries => {
        res.json(countries);
    });
});

app.delete("/countries/:name", function (req, res) {
    countries.findOneAndDelete({ name: req.params.name })
        .then(countries => {
            res.json(countries)
        })
})

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});