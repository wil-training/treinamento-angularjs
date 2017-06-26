(function () {
  'use strict';

  class ListaController {
    constructor(pessoasFactory) {
      this.pessoas = [];
      this.pessoasFactory = pessoasFactory;
    }
    $onInit() {
      const aoCarregarPessoas = (pessoas) => {
        this.pessoas = pessoas;
      };
      const aoFalharCarregamento = () => {
        alert('Não foi possível carregar pessoas');
      };

      this.pessoasFactory.carregarTodas()
        .then(aoCarregarPessoas, aoFalharCarregamento);
    }
  }

  ListaController.$$ngIsClass = true; // work-around
  ListaController.$inject = ['pessoasFactory'];

  angular.module('nozes')
    .controller('ListaController', ListaController);
})();
