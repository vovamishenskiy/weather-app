const express = require('express')
const cors = require('cors')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
require('dotenv').config()
const app = express()
app.use(cors())

// creating city variable to store value from frontend city input, then pass it to /getForecast
let city
app.post('/api/v1/getCityInput', jsonParser, (req, res) => {
    city = req.body
    res.send(city)
})

// creating api request, using base url, api key and city value from /getCityInput
app.get('/api/v1/getForecast', async (req, res) => {
    const baseUrl = `${process.env.BASE_URL}/forecast.json?key=${process.env.KEY}&q=${JSON.stringify(city)}}`
    const options = { method: 'GET' }

    fetch(baseUrl, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(`err: ${err}`))

    try {
        let response = await fetch(baseUrl, options)
        response = await response.json()
        res.status(200).json(response)
    } catch (err) {
        console.log(`err: ${err}`)
        res.status(500).json('error')
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})