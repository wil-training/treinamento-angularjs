const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'app')));

app.listen(8081, function () {
  console.log('App sendo executada em: http://localhost:8081');
});
