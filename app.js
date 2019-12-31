var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Review = require('./api/models/Review'), 
  Class = require('./api/models/Class'),  
  bodyParser = require('body-parser');

// - DB: Mongoose Instance Connection URL
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/classtideDB'); 

// - Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// - Route
var routes = require('./api/routes/route');
routes(app); //register the route

// - Middleware
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});