(function () {
  'use strict';

  function contatosService($http, $q) {

    const url = 'http://localhost:3000/contatos';

    const service = {
      obterTodos: obterTodos,
      criar: criar
    };

    function obterTodos() {
      const promise = $http.get(url);
      return promise.then(aoSucesso, aoFalhar);
    }

    function criar(contato) {
      const promise = $http.post(url, contato);
      return promise.then(aoSucesso, aoFalhar);
    }

    function aoSucesso(response) {
      return response.data;
    }
    function aoFalhar(response) {
      return $q.reject('Falha');
    }

    return service;
  }

  contatosService.$inject = ['$http', '$q'];

  angular.module('app')
    .factory('contatosService', contatosService);
})();
