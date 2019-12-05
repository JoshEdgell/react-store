const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,   
    description: String, 
    category: String,
    price: String, 
    images: Array, 
    mainImage: String
});

const products = mongoose.model('products', productSchema);

module.exports = products;