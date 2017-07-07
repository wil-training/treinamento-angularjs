import templateUrl from './contato-formulario.component.html';

export const ContatoFormularioComponent = {
  templateUrl,
  bindings: {
    contato: '<'
  },
  controller: class ContatoFormularioComponent {
    constructor(ContatosService) {
      'ngInject';

      this.contato = null;

      this.mensagemSucesso = 'Cadastro realizado com sucesso';
      this.mostraMensagemSucesso = false;

      this.camposComErro = [];
      this.mensagensFalha = [];
      this.mostraMensagensFalha = false;

      this.contatosService = ContatosService;
    }

    $onInit() {
      if (this.contato == null) {
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
      if (this.contato.id == null) {
        return true;
      }
      return false;
    }

    criarNovoContato(novoContato) {

      const aoCriarNovoContatoSucesso = () => {
        this.inicializarCadastro();
        this.mensagemSucesso = 'Cadastro realizado com sucesso';
        this.mostraMensagemSucesso = true;
      };

      this.contatosService.criar(novoContato)
        .then(aoCriarNovoContatoSucesso)
        .catch(mensagem => this.mostrarMensagemErro(mensagem));
    }

    alterarContato(contato) {

      const aoAlterarContatoSucesso = () => {
        this.mensagemSucesso = 'Cadastro alterado com sucesso';
        this.mostraMensagemSucesso = true;
      };

      this.contatosService.alterar(contato)
        .then(aoAlterarContatoSucesso)
        .catch(mensagem => this.mostrarMensagemErro(mensagem));
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
      if (nomeSemEspacos === '') {
        this.camposComErro.push('nome');
        this.mensagensFalha.push('Nome não informado');
        return false;
      }
      return true;
    }
    validarSobrenome() {
      const nomeMinusculo = this.contato.nome.toLocaleLowerCase();
      const nomeMinusculoSemEspacos = this.removerEspacos(nomeMinusculo);

      const sobrenomeMinusculo = this.contato.sobrenome.toLocaleLowerCase();
      const sobrenomeMinusculoSemEspacos = this.removerEspacos(sobrenomeMinusculo);

      if (sobrenomeMinusculoSemEspacos !== '' && sobrenomeMinusculoSemEspacos === nomeMinusculoSemEspacos) {
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
      const estaInvalido = this.camposComErro.includes(nomeCampo);
      return estaInvalido;
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
  },
};