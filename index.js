const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const dogAPI = require('./api/dogs')

const app = express()

const port = process.env.PORT || '3000'

mongoose.connect('mongodb://localhost:27017/animals_node', {
    useMongoClient: true
})

app.use(bodyParser())

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Dogs API
app.get('/api/dogs', dogAPI.getDogs)
app.get('/api/dogs/:id', dogAPI.getDog)
app.post('/api/dogs', dogAPI.postDog)
app.put('/api/dogs/:id', dogAPI.updateDog)
app.delete('/api/dogs/:id', dogAPI.deleteDog)


app.listen(port, () => {
    console.log(`The app is listening on ${port}`)
})