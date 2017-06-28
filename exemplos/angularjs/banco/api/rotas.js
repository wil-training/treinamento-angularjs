const rotas = {
  configurar: configurarRotas
};

const sqlConfig = {
  connectionString: 'Driver={SQL Server Native Client 11.0};Server=localhost,1433;Database=Cadastros;Trusted_Connection={yes};',
};

function configurarRotas(app, router, sql, queries) {

  const pool = new sql.ConnectionPool(sqlConfig);

  router
    .route('/alunos')
    .get(obterTodos);

  router.route('/alunos/:codigo')
    .get(obter);
  // .put(alterar)
  // .delete(excluir);

  app.use('/api', router);

  function obterTodos(request, response) {
    realizarChamadaNoBanco(queries.get)
      .then(retornarRecordset(response))
      .catch(retornarErroInterno(response));
  }

  function obter(request, response) {

    const inputs = [{
      parameter: 'codigo',
      type: sql.Int,
      value: request.params.codigo
    }];

    realizarChamadaNoBanco(queries.getPorCodigo, inputs)
      .then(retornarUnicoObjetoOuErroSeNaoEncontrado(response))
      .catch(retornarErroInterno(response));
  }

  function retornarUnicoObjetoOuErroSeNaoEncontrado(response) {
    return function (result) {
      const objeto = result.recordset[0];
      if (objeto === null || typeof objeto === 'undefined') {
        response.status(404).send('Not found');
      } else {
        response.end(JSON.stringify(objeto));
      }
    };
  }

  function retornarRecordset(response) {
    return function (result) {
      response.end(JSON.stringify(result.recordset));
    };
  }

  function retornarErroInterno(response) {
    return function (err) {
      response.status(500).send(err);
    }
  }

  function realizarChamadaNoBanco(sqlQuery, inputs) {
    const promise = new Promise((resolver, rejeitar) => {

      pool.connect().then(aoConectar);

      function aoConectar() {
        const request = pool.request();

        if (inputs !== null && typeof inputs !== 'undefined') {
          inputs.forEach((input) => {
            request.input(input.parameter, input.type, input.value);
          });
        }

        request.query(sqlQuery, aoRealizarQuery);
      }

      function aoRealizarQuery(err, result) {
        if (err) {
          rejeitar(err);
        } else {
          resolver(result);
        }
        pool.close();
      }
    });

    return promise;
  }
}

module.exports = rotas;
