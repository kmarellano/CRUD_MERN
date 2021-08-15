const mongoose = require('mongoose');

const todoItems = new mongoose.Schema({
    item: {
        title: String,
        description: String,
        date: Date,
    }
});

module.exports = mongoose.model('todoItems', todoItems);