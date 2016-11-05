// main server

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

// should get all files in the public folder
app.use(express.static(process.cwd() + '/public'));
// no idea
app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = 4000;
app.listen(port);