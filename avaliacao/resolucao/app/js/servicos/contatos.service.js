(function () {
  'use strict';

  function contatosService($http, $q) {

    const url = 'http://localhost:3000/contatos';

    const service = {
      obterTodos: obterTodos,
      obter: obter,
      criar: criar,
      alterar: alterar,
      excluir: excluir
    };

    function obterTodos() {
      const promise = $http.get(url);
      return promise.then(aoSucesso, aoFalhar);
    }

    function obter(id) {
      const urlComId = url + '/' + id;
      const promise = $http.get(urlComId);
      return promise.then(aoSucesso, aoFalhar);
    }

    function criar(contato) {
      const promise = $http.post(url, contato);
      return promise.then(aoSucesso, aoFalhar);
    }

    function alterar(contato) {
      const urlComId = url + '/' + contato.id;
      const promise = $http.put(urlComId, contato);
      return promise.then(aoSucesso, aoFalhar);
    }

    function excluir(id) {
      const urlComId = url + '/' + id;
      const promise = $http.delete(urlComId);
      return promise.then(aoSucesso, aoFalhar);
    }

    function aoSucesso(response) {
      return response.data;
    }
    function aoFalhar(reason) {
      const statusCode = reason.status;

      if (statusCode === 404) {
        return $q.reject('Registro não encontrado');
      } else {
        return $q.reject('Falha ao completar solicitação');
      }
    }

    return service;
  }

  contatosService.$inject = ['$http', '$q'];

  angular.module('app')
    .factory('contatosService', contatosService);
})();
