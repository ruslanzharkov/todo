// import express from 'express';
//
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import { serverPort } from '../etc/config.json';
//
// import * as db from './utils/DataBaseUtils';

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('../etc/config.json');
const db = require('./utils/DataBaseUtils');



// Initialization of express application
const app = express();

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers
app.get('/todos', db.listTodo.bind(db));

app.post('/todos', (req, res) => {
    db.createTodo(req.body).then(data => res.send(data));
});

app.put('/todos/:id', db.updateTodo.bind(db));

app.delete('/todos/:id', (req, res) => {
    db.deleteTodo(req.params.id).then(data => res.send(data));
});

const server = app.listen(config.serverPort, function() {
    console.log(`Server is up and running on port ${config.serverPort}`);
});
