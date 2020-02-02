var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Review = require('./api/models/Review'), 
  Class = require('./api/models/Class'),  
  mongoose = require('mongoose'), 
  bodyParser = require('body-parser');

  // var users = require('./routes/users');


app.use(express.static('public'));

app.get('/login',function(req,res) {
  res.sendFile('public/login.html' , { root : __dirname});
});

// - DB: Mongoose Instance Connection URL

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/classtideDB'); 
const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017/classtideDB");
};

connectDb().then(async () => {
  app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
  );
});

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