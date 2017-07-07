import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { UIRouterModule } from "@uirouter/angular";

import { ContatoListaComponent } from './contato-lista/contato-lista.component';
import { ContatoFormularioComponent } from './contato-formulario/contato-formulario.component';
import { ContatosService } from './contatos.service';

import { contatoStatesConfig } from './contato.states';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild(contatoStatesConfig)
  ],
  providers: [
    ContatosService
  ],
  declarations: [
    ContatoListaComponent,
    ContatoFormularioComponent
  ]
})
export class ContatoModule { }