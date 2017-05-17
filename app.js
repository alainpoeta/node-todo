var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

console.log(config.getDbConnectionString());

setupController(app);
apiController(app);

mongoose.connect(config.getDbConnectionString());

app.listen(port);