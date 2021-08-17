const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

const todoRouter = require('./routes/todo.router');
app.use('/api', todoRouter);

module.exports = app;