const data = require('./data.json')

const countryData = data.map(item => {
    Country = []
    Country.name = item.name
    Country.capital = item.capital
    Country.region = item.region
    Country.subregion = item.subregion
    Country.population = item.population
    return Country
})
console.log(countryData)