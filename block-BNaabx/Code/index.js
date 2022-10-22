var express = require('express');
var fs = require('fs');
const app = express();

// app.use((req, res, next) => {
//   console.log(req.method, req.url, new Date().toLocaleTimeString());
//   next();
// });
var elm = '';
app.use('/users', (req, res, next) => {
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    req.body = store;
  });
  next();
});
app.use('/', (req, res, next) => {
  fs.readFile(__dirname + req.url, (err, content) => {
    if (err) {
      next();
    } else {
      res.send(content);
    }
  });
});
app.get('/index', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname + '/index.html');
});
app.get('/', (req, res) => {
  res.send('hi');
});
app.post('/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(req.body);
});
app.listen(3000, () => {
  console.log(`Started at 3k`);
});
