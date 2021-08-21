const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
});

const Items = mongoose.model('items', itemsSchema);
module.exports = Items;