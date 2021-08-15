const express = require('express');
const app = express();
app.use(express.json());

const todoRouter = require('./routes/todo.router');

app.use('/api', todoRouter);


module.exports = app;