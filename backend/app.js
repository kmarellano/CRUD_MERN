const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const todoRouter = require('./routes/todo.router');
app.use('/api', todoRouter);

module.exports = app;