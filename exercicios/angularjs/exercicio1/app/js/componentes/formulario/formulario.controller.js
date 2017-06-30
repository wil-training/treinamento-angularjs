(function () {
  'use strict';

  class FormularioController {
    constructor() {
      this.pessoa = {};
    }
    cadastrar() {
      this.aoCriarPessoa({
        pessoa: this.pessoa
      });
      this.pessoa = {};
    }
  }

  FormularioController.$$ngIsClass = true;

  angular.module('app')
    .controller('FormularioController', FormularioController);
})();
