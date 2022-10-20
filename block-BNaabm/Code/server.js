var express = require('express');
var app = express();

app.use('/path', (req, res, next) => {
  console.log(req.url + req.method);
  next();
});
app.use('/path', (req, res, next) => {
  console.log(req.url + req.method);
  next();
});

app.get('/', (req, res) => {
  res.end('done');
});

app.listen(3000, 'localhost', () => {
  console.log(`server at 3k`);
});
