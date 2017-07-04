(function () {
  'use strict';

  class ListaController {
    constructor($state, contatosService) {

      this.mostraMensagemSucesso = false;
      this.mostraMensagensFalha = false;

      this.$state = $state;
      this.contatosService = contatosService;
    }

    excluirContato(contatoId) {

      this.limparMensagensValidacao();

      const aoExcluirContatoSucesso = (contato) => {
        this.$state.reload();
        this.mostraMensagemSucesso = true;
      };
      const aoExcluirContatoFalha = (mensagem) => {
        this.mensagemFalha = mensagem;
        this.mostraMensagensFalha = true;
      };

      this.contatosService
        .excluir(contatoId)
        .then(aoExcluirContatoSucesso, aoExcluirContatoFalha);
    }

    limparMensagensValidacao() {
      this.mostraMensagemSucesso = false;
      this.mostraMensagensFalha = false;
    }
  }

  ListaController.$$ngIsClass = true;
  ListaController.$inject = ['$state', 'contatosService'];

  angular.module('app')
    .controller('ListaController', ListaController);
})();
