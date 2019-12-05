// const express           = require('express');
const products          = require('../models/products.js');
// const router            = express.Router();

module.exports = {
    findAll: function(req,res) {
        products.find({}, (error, allProducts)=>{
            res.json(allProducts);
        })
    },
    create: function(req,res) {
        products.create(req.body, (error, createdProduct)=>{
            res.json(createdProduct);
        })
    },
    read: function(req,res) {
        products.find({'_id':req.params.id}, (error, foundProduct)=>{
            res.json(foundProduct);
        })
    },
    update: function(req,res) {
        products.findOneAndUpdate({'_id':req.params.id}, req.body, {new:true}, (error, updatedProduct)=>{
            res.json(updatedProduct);
        })
    },
    delete: function(req,res) {
        products.findOneAndRemove({'_id':req.params.id}, (error, deletedProduct)=>{
            res.json(deletedProduct);
        })
    }
}