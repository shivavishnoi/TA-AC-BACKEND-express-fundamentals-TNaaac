var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use('/', (req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.post('/json', (req, res) => {
  res.send(req.body);
});
app.post('/contact', (req, res) => {
  res.send(req.body);
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.listen(3000);
