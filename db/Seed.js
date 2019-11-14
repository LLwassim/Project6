const data = require('./data.json')

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

countryData.delete({})
    .then(() => {
        countryData.create(data)
            .then(countryData => {
                console.log(countryData),
                process.exit()
            })
            .catch(err => {
                console.log(err),
                process.exit()
            })
    })