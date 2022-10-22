var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();

app.use(logger('combined'));
app.use(cookieParser());
app.use((req, res, next) => {
  res.cookie('name', 'Nishi');
  next();
});
app.use(express.json());
app.use(express.static(__dirname + '/Public'));

app.use('/auth', (req, res, next) => {
  next('unauthorized access');
});
app.post('/json', (req, res) => {
  res.json(req.body);
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/blog.html');
});
app.get('/users', (req, res) => {
  res.send(`welcome to users route`);
});
app.use((req, res, next) => {
  res.status(404).send(`Error 404:Page not Found`);
});
app.use((err, req, res, next) => {
  res.status(400).send(err);
});
app.listen(4000, () => {
  console.log(`server at 4k`);
});
