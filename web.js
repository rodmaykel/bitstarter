var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html').toString());
});

app.get('/login', function(request, response) {
  response.send(fs.readFileSync('login.html').toString());
});

app.get('/home', function(request, response) {
  response.send(fs.readFileSync('home.html').toString());
});

app.get('/dashboard', function(request, response) {
  response.send(fs.readFileSync('dashboard.html').toString());
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});