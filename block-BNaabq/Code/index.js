var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var logger = require('morgan');

app.use(logger('dev'));
app.use(cookieParser());
app.use('/about', (req, res, next) => {
  var name = req.cookies.name;
  if (!name) {
    res.cookie('name', 'shivaji vishnoi');
  }
  next();
});
app.use('/about', (req, res, next) => {
  console.log(req.cookies);
  next();
});
app.get('/about', (req, res) => {
  res.send('cookie created');
});

app.listen(3000);
