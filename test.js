var express  = require('express');
var app      = express();



app.get("/test", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });



app.listen(8085);