//Dependencies
var express = require('express');

//Express
var app = express();
app.set("trust proxy", true);
var port = process.env.PORT || 5000;

//Routes
app.use('/api', require('./routes/api.js'))

//Start server
app.listen(port, function() {
  console.log('App started, and running on port: ' + port);
});
