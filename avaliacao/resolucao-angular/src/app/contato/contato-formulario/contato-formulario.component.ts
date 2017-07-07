import { Component, OnInit, Input } from '@angular/core';

import { ContatosService } from '../contatos.service';
import { Contato } from '../contato.model';

@Component({
  selector: 'contato-formulario',
  templateUrl: './contato-formulario.component.html'
})
export class ContatoFormularioComponent implements OnInit {
  @Input() contato: Contato = null;

  mensagemSucesso: string = 'Cadastro realizado com sucesso';
  mostraMensagemSucesso: boolean = false;
  camposComErro: string[] = [];
  mensagensFalha: string[] = [];
  mostraMensagensFalha: boolean = false;

  constructor(private contatosService: ContatosService) {

  }

  ngOnInit() {
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

  modoCriacao(): boolean {
    if (this.contato.id == null) {
      return true;
    }
    return false;
  }

  criarNovoContato(novoContato: Contato) {

    const aoCriarNovoContatoSucesso = () => {
      this.inicializarCadastro();
      this.mensagemSucesso = 'Cadastro realizado com sucesso';
      this.mostraMensagemSucesso = true;
    };

    this.contatosService.criar(novoContato)
      .then(aoCriarNovoContatoSucesso)
      .catch(this.mostrarMensagemErro);
  }

  alterarContato(contato: Contato) {

    const aoAlterarContatoSucesso = () => {
      this.mensagemSucesso = 'Cadastro alterado com sucesso';
      this.mostraMensagemSucesso = true;
    };

    this.contatosService.alterar(contato)
      .then(aoAlterarContatoSucesso)
      .catch(this.mostrarMensagemErro);
  }

  inicializarCadastro() {
    this.contato = new Contato();
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
  validarNome(): boolean {
    const nomeSemEspacos = this.removerEspacos(this.contato.nome);
    if (nomeSemEspacos === '') {
      this.camposComErro.push('nome');
      this.mensagensFalha.push('Nome não informado');
      return false;
    }
    return true;
  }
  validarSobrenome(): boolean {
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
  validarTelefone(): boolean {
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

  verificarSeCampoEstaInvalido(nomeCampo: string): boolean {
    const estaInvalido = this.camposComErro.includes(nomeCampo);
    return estaInvalido;
  }

  mostrarMensagemErro(mensagem: string) {
    this.mensagensFalha.push(mensagem);
    this.mostraMensagensFalha = true;
  }

  removerEspacos(texto: string): string {
    const regexTodosEspacos = new RegExp(' ', 'g');
    const textoSemEspacos = texto.replace(regexTodosEspacos, '');
    return textoSemEspacos;
  }
}
