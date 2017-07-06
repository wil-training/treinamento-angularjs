(function () {
  'use strict';

  class ListaController {
    constructor($state, contatosService) {

      this.mostraMensagensFalha = false;

      this.$state = $state;
      this.contatosService = contatosService;
    }

    excluirContato(contatoId) {

      this.limparMensagensValidacao();

      const usuarioDesejaExcluir = window.confirm('Deseja excluir o contato selecionado?');
      if (usuarioDesejaExcluir === false) {
        return;
      }

      const aoExcluirContatoSucesso = (contato) => {
        this.$state.reload();
      };
      const aoExcluirContatoFalha = (mensagem) => {
        this.mensagemFalha = mensagem;
        this.mostraMensagensFalha = true;
      };

      this.contatosService.excluir(contatoId)
        .then(aoExcluirContatoSucesso, aoExcluirContatoFalha);
    }

    limparMensagensValidacao() {
      this.mostraMensagensFalha = false;
    }
  }

  ListaController.$$ngIsClass = true;
  ListaController.$inject = ['$state', 'contatosService'];

  angular.module('app')
    .controller('ListaController', ListaController);
})();
