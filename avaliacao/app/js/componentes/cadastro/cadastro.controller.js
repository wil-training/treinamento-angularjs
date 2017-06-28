(function () {
  'use strict';

  class CadastroController {
    constructor(contatosService) {
      this.cadastro = {};
      this.contatosService = contatosService;
    }
    $onInit() {
      
    }
    cadastrar() {
      // Validar se telefone tem texto

      const novoCadastro = Object.assign({}, this.cadastro);

      const aoCriarCadastro = (cadastro) => {
        this.cadastro = {};
        alert('Cadastro criado com sucesso');
      };

      this.contatosService
        .criar(novoCadastro)
        .then(aoCriarCadastro);
    }
  }

  CadastroController.$inject = ['contatosService'];
  CadastroController.$$ngIsClass = true;

  angular.module('app')
    .controller('CadastroController', CadastroController);
})();
