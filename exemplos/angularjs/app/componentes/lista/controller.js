(function () {
  'use strict';

  class ListaController {
    constructor(pessoaFactory, cachorroService) {
      debugger;
      cachorroService.latir();
    }
  }

  ListaController.$inject = ['pessoaFactory', 'CachorroService'];

  angular.module('app')
    .controller('ListaController', ListaController);
})();
