(function () {
  'use strict';

  class CadastroController {
    constructor(contatosService) {

      this.contato = null;

      this.mensagemSucesso = 'Cadastro realizado com sucesso';
      this.mostraMensagemSucesso = false;

      this.camposComErro = [];
      this.mensagensFalha = [];
      this.mostraMensagensFalha = false;

      this.contatosService = contatosService;
    }

    $onInit() {
      if (this.contato === null || typeof this.contato === 'undefined') {
        this.inicializarCadastro();
      }
    }

    cadastrar() {
      this.limparValidacao();

      const camposValidos = this.validarCampos();

      if (camposValidos === false) {
        this.mostraMensagensFalha = true;
      } else {

        if (this.modoCriacao() === true) {
          const novoContato = Object.assign({}, this.contato);
          this.criarNovoContato(novoContato);
        } else {
          this.alterarContato(this.contato);
        }
      }
    }

    modoCriacao() {
      if (this.contato.id === null || typeof this.contato.id === 'undefined') {
        return true;
      }
      return false;
    }

    criarNovoContato(novoContato) {

      const aoCriarNovoContatoSucesso = (contato) => {
        this.inicializarCadastro();
        this.mensagemSucesso = 'Cadastro realizado com sucesso';
        this.mostraMensagemSucesso = true;
      };
      const aoCriarNovoContatoFalha = (mensagem) => {
        this.mostrarMensagemErro(mensagem);
      };

      this.contatosService
        .criar(novoContato)
        .then(aoCriarNovoContatoSucesso, aoCriarNovoContatoFalha);
    }

    alterarContato(contato) {
      const aoAlterarContatoSucesso = (contato) => {
        this.mensagemSucesso = 'Cadastro alterado com sucesso';
        this.mostraMensagemSucesso = true;
      };
      const aoAlterarContatoFalha = (mensagem) => {
        this.mostrarMensagemErro(mensagem);
      };

      this.contatosService
        .alterar(contato)
        .then(aoAlterarContatoSucesso, aoAlterarContatoFalha);
    }

    inicializarCadastro() {
      this.contato = {
        nome: '',
        sobrenome: '',
        telefone: ''
      };
    }

    limparValidacao() {
      this.camposComErro = [];
      this.mensagensFalha = [];
      this.mostraMensagensFalha = false;
    }
    validarCampos() {
      const campoNomeValido = this.validarNome();
      const campoSobrenomeValido = this.validarSobrenome();
      const campoTelefoneValido = this.validarTelefone();

      if (campoNomeValido === false || campoSobrenomeValido === false ||
        campoTelefoneValido === false) {

        return false;
      }

      return true;
    }
    validarNome() {
      const nomeSemEspacos = this.removerEspacos(this.contato.nome);
      if (nome === '') {
        this.camposComErro.push('nome');
        this.mensagensFalha.push('Nome não informado');
        return false;
      }
      return true;
    }
    validarSobrenome() {
      const nomeSemEspacos = this.removerEspacos(this.contato.nome);
      const sobrenomeSemEspacos = this.removerEspacos(this.contato.sobrenome);
      if (sobrenomeSemEspacos !== '' && sobrenomeSemEspacos === nomeSemEspacos) {
        this.camposComErro.push('sobrenome');
        this.mensagensFalha.push('Sobrenome não pode ser igual ao nome');
        return false;
      }
      return true;
    }
    validarTelefone() {
      const telefoneSemEspacos = this.removerEspacos(this.contato.telefone);
      if (telefoneSemEspacos === '') {
        this.camposComErro.push('telefone');
        this.mensagensFalha.push('Telefone não informado');
        return false;
      } else {
        const telefoneNumerico = Number(telefoneSemEspacos);
        if (Number.isNaN(telefoneNumerico)) {
          this.camposComErro.push('telefone');
          this.mensagensFalha.push('Telefone só pode contar números');
          return false;
        }
      }
      return true;
    }

    verificarSeCampoEstaInvalido(nomeCampo) {
      const indice = this.camposComErro.indexOf(nomeCampo);
      if (indice > -1) {
        return true;
      }
      return false;
    }

    mostrarMensagemErro(mensagem) {
      this.mensagensFalha.push(mensagem);
      this.mostraMensagensFalha = true;
    }

    removerEspacos(texto) {
      const regexTodosEspacos = new RegExp(' ', 'g');
      const textoSemEspacos = texto.replace(regexTodosEspacos, '');
      return textoSemEspacos;
    }
  }

  CadastroController.$inject = ['contatosService'];
  CadastroController.$$ngIsClass = true;

  angular.module('app')
    .controller('CadastroController', CadastroController);
})();
