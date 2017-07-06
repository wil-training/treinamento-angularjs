import templateUrl from './contato-lista.template.html';

const ContatoListaComponent = {
  templateUrl,
  bindings: {
    contatos: '<'
  },
  controller: class ContatoListaComponent {
    constructor($state, ContatosService) {
      'ngInject';

      this.mostraMensagensFalha = false;

      this.$state = $state;
      this.ContatosService = ContatosService;
    }

    excluirContato(contatoId) {

      this.limparMensagensValidacao();

      const usuarioDesejaExcluir = window.confirm('Deseja excluir o contato selecionado?');
      if (usuarioDesejaExcluir === false) {
        return;
      }

      this.ContatosService.excluir(contatoId)
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

export default ContatoListaComponent;