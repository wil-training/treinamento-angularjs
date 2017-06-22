(function () {
  'use strict';

  class PaginaController {
    constructor() {
      this.cadastros = [];
    }
    salvar(nome) {
      // debugger;
      // console.log(nome);
      this.cadastros.push(nome);
    }
  }

  angular.module('app')
    .controller('PaginaController', PaginaController);
})();
