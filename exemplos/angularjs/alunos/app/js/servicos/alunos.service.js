(function () {
  'use strict';

  function alunosService($http, $q) {

    const url = 'http://localhost:3000/alunos';

    const servico = {
      obterTodos: obterTodos,
      obter: obter,
      criar: criar,
      alterar: alterar,
      excluir: excluir
    };

    function obterTodos() {
      const promise = $http.get(url);
      return promise.then(aoRequisicaoConcluir, aoRequisicaoFalhar);
    }

    function obter(id) {
      const urlComId = url + '/' + id;
      const promise = $http.get(urlComId);
      return promise.then(aoRequisicaoConcluir, aoRequisicaoFalhar);
    }

    function criar(aluno) {
      const promise = $http.post(url, aluno);
      return promise.then(aoRequisicaoConcluir, aoRequisicaoFalhar);
    }

    function alterar(aluno) {
      const urlComId = url + '/' + aluno.id;
      const promise = $http.put(urlComId, aluno);
      return promise.then(aoRequisicaoConcluir, aoRequisicaoFalhar);
    }

    function excluir(id) {
      const urlComId = url + '/' + id;
      const promise = $http.delete(urlComId);
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
