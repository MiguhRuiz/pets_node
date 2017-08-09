const Cat = require('../models/cat')

module.exports = {
    getCats: function (req, res) {
                Cat.find((err, docs) => {
                    if(err) {
                        res.status(500)
                        res.json(err)
                    }
                    res.status(200)
                    res.json(docs)
                })
            },
    getCat: function (req, res) {
                Cat.findById(req.params.id, (err, doc) => {
                    if(err) {
                        res.status(500)
                        res.json(err)
                    }
                    res.status(200)
                    res.json(doc)
                })
            },
    postCat: function (req, res) {
                Cat.create(req.body, (err, doc) => {
                    if(err) {
                        res.status(500)
                        res.json(err)
                    }
                    res.status(201)
                    res.json(doc)
                })
            },
    updateCat: function (req, res) {
                    Cat.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, doc) => {
                        if(err) {
                            res.status(500)
                            res.json(err)
                        }
                        res.status(201)
                        res.json(doc)
                    })
                },
    deleteCat: function (req, res) {
                    Cat.findByIdAndRemove(req.params.id, (err, doc) => {
                        if(err) {
                            res.status(500)
                            res.json(err)
                        }
                        res.status(204)
                        res.json(doc)
                    })
                }
}