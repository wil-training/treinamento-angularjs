(function () {
  'use strict';

  class CadastroController {
    constructor(pessoaFactory, CachorroService) {
      debugger;
    }
    cadastrar() {
      this.aoCriar({
        nome: this.nome
      });
    }
  }

  CadastroController.$inject = ['pessoaFactory'];

  angular.module('app')
    .controller('CadastroController', CadastroController);
})();
