const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
require('dotenv').config()
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const axios = require('axios')
const port = 4242


app.get('/', (req, res) => {
    res.send('test')
})

// axios
//     .get(`${process.env.BASE_URL}/forecast.json?key=${process.env.KEY}&q=London`)
//     .then(res => dataObject.push(res))

// axios.get(`${process.env.BASE_URL}/forecast.json?key=${process.env.KEY}&q=London`)

app.post('/getCityInput', (req, res) => {
    let city = req.body
    console.log(req.body)
})

app.get('/getForecast', async (req, res) => {
    const baseUrl = `${process.env.BASE_URL}/forecast.json?key=${process.env.KEY}&q=London`
    const options = { method: 'GET' }

    fetch(baseUrl, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))

    try {
        let response = await fetch(baseUrl, options)
        response = await response.json()
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json('error')
    }
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})