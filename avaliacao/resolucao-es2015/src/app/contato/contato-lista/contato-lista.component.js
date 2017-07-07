import templateUrl from './contato-lista.component.html';

export const ContatoListaComponent = {
  templateUrl,
  bindings: {
    contatos: '<'
  },
  controller: class ContatoListaComponent {
    constructor($state, ContatosService) {
      'ngInject';

      this.mostraMensagensFalha = false;

      this.$state = $state;
      this.contatosService = ContatosService;
    }

    existemContatos() {
      if (this.contatos != null && this.contatos.length > 0) {
        return true;
      }
      return false;
    }

    excluirContato(contatoId) {

      this.limparMensagensValidacao();

      const usuarioDesejaExcluir = window.confirm('Deseja excluir o contato selecionado?');
      if (usuarioDesejaExcluir === false) {
        return;
      }

      this.contatosService.excluir(contatoId)
        .then(() => this.$state.reload())
        .catch(mensagem => this.mostrarMensagemDeFalha(mensagem));
    }

    limparMensagensValidacao() {
      this.mostraMensagensFalha = false;
    }

    mostrarMensagemDeFalha(mensagem) {
      this.mensagemFalha = mensagem;
      this.mostraMensagensFalha = true;
    }
  }
};