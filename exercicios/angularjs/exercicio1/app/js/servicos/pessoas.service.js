(function () {
  'use strict';

  function pessoasService($http, $q) {

    const url = 'http://localhost:3000/pessoas';

    const service = {
      obterTodos: obterTodos,
      criar: criar
    };

    function obterTodos() {
      const promise = $http.get(url);
      return promise.then(aoSucesso, aoFalhar);
    }

    function criar(pessoa) {
      const promise = $http.post(url, pessoa);
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

  pessoasService.$inject = ['$http', '$q'];

  angular.module('app')
    .factory('pessoasService', pessoasService);
})();
