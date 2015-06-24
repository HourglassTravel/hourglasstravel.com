
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var usersRouter = express.Router();
var quotesRouter = express.Router();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));
app.use('/api/users', usersRouter);
app.use('/api/quotes', quotesRouter);
require('./users/router')(usersRouter);
require('./quotes/router')(quotesRouter);

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/hourglass');

module.exports.app = app;
module.exports.db = mongoose.connection;
