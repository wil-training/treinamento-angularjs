import { Component, Input } from '@angular/core';

import { Contato } from '../contato.model';
import { ContatosService } from '../contatos.service';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'contato-lista',
  templateUrl: './contato-lista.component.html'
})
export class ContatoListaComponent {
  @Input() contatos: Contato[];

  mostraMensagensFalha: boolean = false;
  mensagemFalha: string = '';

  constructor(private stateService: StateService, private contatosService: ContatosService) {

  }

  existemContatos(): boolean {
    if (this.contatos != null && this.contatos.length > 0) {
      return true;
    }
    return false;
  }

  excluirContato(contatoId: number) {

    this.limparMensagensValidacao();

    const usuarioDesejaExcluir = window.confirm('Deseja excluir o contato selecionado?');
    if (usuarioDesejaExcluir === false) {
      return;
    }

    this.contatosService.excluir(contatoId)
      .then(this.stateService.reload)
      .catch(this.mostrarMensagemDeFalha);
  }

  limparMensagensValidacao() {
    this.mostraMensagensFalha = false;
  }

  mostrarMensagemDeFalha(mensagem: string) {
    this.mensagemFalha = mensagem;
    this.mostraMensagensFalha = true;
  }
}
