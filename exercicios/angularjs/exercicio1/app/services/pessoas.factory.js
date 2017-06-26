(function () {
  'use strict';

  function pessoasFactory($http, $q) {

    const url = 'http://localhost:3000/pessoas';

    const service = {
      carregarTodas: carregarTodas,
      carregar: carregar,
      cadastrar: cadastrar,
      editar: editar,
      excluir: excluir
    };

    function carregarTodas() {
      const promise = $http.get(url);
      return promise.then(aoSucesso, aoFalhar);
    }

    function carregar(id) {
      const urlComId = url + '/' + id;
      const promise = $http.get(urlComId);
      return promise.then(aoSucesso, aoFalhar);
    }

    function cadastrar(pessoa) {
      const promise = $http.post(url, pessoa);
      const promiseComThen = promise.then(aoSucesso, aoFalhar)
      return promiseComThen;
    }

    function editar(pessoa) {
      const urlComId = url + '/' + id;
      const promise = $http.put(urlComId, pessoa);
      const promiseComThen = promise.then(aoSucesso, aoFalhar)
      return promiseComThen;
    }

    function excluir() {
      const urlComId = url + '/' + id;
      const promise = $http.delete(urlComId);
      const promiseComThen = promise.then(aoSucesso, aoFalhar)
      return promiseComThen;
    }

    function aoSucesso(response) {
      return response.data;
    }
    function aoFalhar(response) {
      return $q.reject('Falha ao carregar');
    }

    return service;
  }

  pessoasFactory.$inject = ['$http', '$q'];

  angular.module('nozes')
    .factory('pessoasFactory', pessoasFactory);

})();
