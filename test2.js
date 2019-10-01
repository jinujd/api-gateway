var express  = require('express');
var app      = express();



app.get("/test2", function(req, res) {
    res.status(200).send("Welcome to our restful API2");
  });



app.listen(8086);