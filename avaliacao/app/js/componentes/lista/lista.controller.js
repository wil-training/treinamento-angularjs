(function () {
  'use strict';

  class ListaController {
    constructor(contatosService) {
      this.contatos = [];
      this.contatosService = contatosService;
    }
    $onInit() {
      this.carregarContatos();
    }
    carregarContatos() {
      const aoCarregarContatos = (contatos) => {
        this.contatos = contatos;
      };

      this.contatosService
        .obterTodos()
        .then(aoCarregarContatos);
    }
  }

  ListaController.$inject = ['contatosService'];
  ListaController.$$ngIsClass = true;

  angular.module('app')
    .controller('ListaController', ListaController);
})();
