(function () {
  'use strict';

  class CadastroController {
    cadastrar() {
      // debugger;
      this.aoCriar({
        nome: this.nome
      });
    }
  }

  angular.module('app')
    .controller('CadastroController', CadastroController);
})();
