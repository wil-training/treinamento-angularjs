const express = require('express');
const app = express();
const path = require('path');
const cons = require('consolidate');

app.use(express.static(path.join(__dirname, 'app')));

app.use(function(req, res) {
    res.sendfile(__dirname + '/app/index.html');
});

app.listen(8081, function () {
  console.log('App sendo executada em: http://localhost:8081');
});
