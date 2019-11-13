const fetch = require('node-fetch')
const fs = require('fs')
const url = "https://restcountries.eu/rest/v2/all"
fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        //checking what the api response is
        let countries = JSON.stringify(res)
        //turn countries into string form
        fs.writeFile('../db/data.json', countries, err => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("success")
            }
        })
    })