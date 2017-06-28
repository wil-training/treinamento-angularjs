const express = require('express');
const path = require('path');
const sql = require('mssql/msnodesqlv8');

const rotas = require('./api/rotas');
const queries = require('./api/queries');

const app = express();
const router = express.Router();

rotas.configurar(app, router, sql, queries);

app.use(express.static(path.join(__dirname, 'app')));

app.listen(8081, function () {
  console.log('App sendo executada em: http://localhost:8081');
});
