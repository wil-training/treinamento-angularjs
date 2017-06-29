(function () {
  'use strict';

  function alunosService($http, $q) {

    const url = 'http://localhost:3000/alunos';

    const servico = {
      obterTodos: obterTodos
    };

    function obterTodos() {
      const promise = $http.get(url);
      return promise.then(aoRequisicaoConcluir, aoRequisicaoFalhar);
    }

    function aoRequisicaoConcluir(response) {
      return response.data;
    }
    function aoRequisicaoFalhar(response) {
      return $q.reject(response.statusText);
    }

    return servico;
  }

  alunosService.$inject = ['$http', '$q'];

  angular.module('app')
    .factory('alunosService', alunosService);
})();
