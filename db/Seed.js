const data = require('./data.json')
const Countries = require('../models/Countries')
const countryData = data.map(item => {
    const Country = {}
    Country.name = item.name
    Country.capital = item.capital
    Country.region = item.region
    Country.subregion = item.subregion
    Country.population = item.population
    return Country
})
console.log(countryData)

Countries.deleteMany({})
    .then(() => {
        Countries.create(countryData)
            .then(countries => {
                console.log(countryData),
                process.exit()
            })
            .catch(err => {
                console.log(err),
                process.exit()
            })
    })