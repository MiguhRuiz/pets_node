const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const dogAPI = require('./api/dogs')
const catAPI = require('./api/cats')
const ownerAPI = require('./api/owner')

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

// Cats API
app.get('/api/cats', catAPI.getCats)
app.get('/api/cats/:id', catAPI.getCat)
app.post('/api/cats', catAPI.postCat)
app.put('/api/cats/:id', catAPI.updateCat)
app.delete('/api/cats/:id', catAPI.deleteCat)

// Owners API
app.get('/api/owners', ownerAPI.getOwners)
app.get('/api/owners/:id', ownerAPI.getOwner)
app.post('/api/owners', ownerAPI.postOwner)
app.put('/api/owners/:id', ownerAPI.updateOwner)
app.delete('/api/owners/:id', ownerAPI.deleteOwner)

app.listen(port, () => {
    console.log(`The app is listening on ${port}`)
})