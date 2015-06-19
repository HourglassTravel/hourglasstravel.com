
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs-utils');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.post('/api/quotes', function(req, res) {
  var quotes = require('../quotes.json');
  var name = req.body.lastName + '.' + req.body.firstName;
  quotes[name] = req.body;
  fs.writeJSON('./quotes.json', quotes, function(err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(req.body);
    }
  });
});

app.get('/api/quotes', function(req, res) {

});

module.exports = app;


