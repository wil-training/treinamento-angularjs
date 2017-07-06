const express = require('express');
const app = express();
const path = require('path');
const errorHandler = require('errorhandler');

app.use(express.static(path.join(__dirname, 'app')));

app.use(function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.use(errorHandler);

app.listen(8081, function () {
  console.log('App sendo executada em: http://localhost:8081');
});
