const Dog = require('../models/dog')

const jsonfy = require('api-helpers').jsonfy
const fail = require('api-helpers').fail

module.exports = {
    getDogs: function (req, res) {
                Dog.find((err, docs) => {
                    if(err) {
                        res.status(500)
                        res.json(err)
                    }
                    res.status(200)
                    res.json(docs)
                })
            },
    getDog: function (req, res) {
                Dog.findById(req.params.id, (err, doc) => {
                    if(err) {
                        res.status(500)
                        res.json(err)
                    }
                    res.status(200)
                    res.json(doc)
                })
            },
    postDog: function (req, res) {
                Dog.create(req.body, (err, doc) => {
                    if(err) {
                        res.status(500)
                        res.json(err)
                    }
                    res.status(201)
                    res.json(doc)
                })
            },
    updateDog: function (req, res) {
                    Dog.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
                        if(err) {
                            res.status(500)
                            res.json(err)
                        }
                        res.status(201)
                        res.json(doc)
                    })
                },
    deleteDog: function (req, res) {
                    Dog.findByIdAndRemove(req.params.id, (err, doc) => {
                        if(err) {
                            res.status(500)
                            res.json(err)
                        }
                        res.status(204)
                        res.json(doc)
                    })
                }
}