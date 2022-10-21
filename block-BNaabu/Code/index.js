var express = require('express');
var app = express();

app.use('/admin', (req, res, next) => {
  next('Unauthorized to access Admin Page');
});
app.get('/', (req, res) => {
  res.send("requested on '/'");
});
app.get('/about', (req, res) => {
  res.send("requested on '/about'");
});
app.use((req, res, next) => {
  res.statusCode = 404;
  res.send('Page not Found : 404');
});
app.use((err, req, res, next) => {
  res.send(err);
});
app.listen(3000);
