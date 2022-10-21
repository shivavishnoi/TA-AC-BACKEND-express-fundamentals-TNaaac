var express = require('express');
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
app.use(logger('tiny'));
app.use(cookieParser());
// app.use((req, res, next)=>{
//   res.cookie("count", 1)
//   next()
// })
app.use((req, res, next) => {
  var count = req.cookies.count;
  if (count) {
    res.cookie('count', Number(count) + 1);
  } else {
    res.cookie('count', 1);
  }
  console.log(count);
  next();
});
app.use('/', (req, res, next) => {
  console.log(req.url, +' ' + req.method);
  next();
});
app.use(express.json());
app.use('/admin', (req, res, next) => {
  next('not authorized');
});
app.get('/', (req, res) => {
  res.type('.html');
  res.send(`<h2>Welcome to Express JS</h2>`);
});
app.get('/about', (req, res) => {
  res.send(`qwerty`);
});
app.get('/users/:username', (req, res) => {
  var username = req.params.username;
  res.type('html');
  res.send(`<h1>${username}</h1>`);
});
app.post('/json', (req, res) => {
  let obj = req.body;
  res.send(obj.name + ' ' + obj.email + ' ' + obj.bio);
});
app.use((req, res, next) => {
  res.send(`404: Page not found`);
});
app.use((err, req, res, next) => {
  res.status(400).send(err);
});
app.listen(3000, 'localhost', () => {
  console.log('server at 3k');
});
