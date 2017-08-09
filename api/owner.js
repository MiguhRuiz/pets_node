const Owner = require('../models/owner')

module.exports = {
    getOwners: function (req, res) {
                Owner.find((err, docs) => {
                    if(err) {
                        res.status(500)
                        res.json(err)
                    }
                    res.status(200)
                    res.json(docs)
                })
            },
    getOwner: function (req, res) {
                Owner.findById(req.params.id, (err, doc) => {
                    if(err) {
                        res.status(500)
                        res.json(err)
                    }
                    res.status(200)
                    res.json(doc)
                })
            },
    postOwner: function (req, res) {
                Owner.create(req.body, (err, doc) => {
                    if(err) {
                        res.status(500)
                        res.json(err)
                    }
                    res.status(201)
                    res.json(doc)
                })
            },
    updateOwner: function (req, res) {
                    Owner.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, doc) => {
                        if(err) {
                            res.status(500)
                            res.json(err)
                        }
                        res.status(201)
                        res.json(doc)
                    })
                },
    deleteOwner: function (req, res) {
                    Owner.findByIdAndRemove(req.params.id, (err, doc) => {
                        if(err) {
                            res.status(500)
                            res.json(err)
                        }
                        res.status(204)
                        res.json(doc)
                    })
                }
}