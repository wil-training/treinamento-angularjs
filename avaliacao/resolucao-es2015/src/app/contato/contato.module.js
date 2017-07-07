import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { ContatoListaComponent } from './contato-lista/contato-lista.component';
import { ContatoFormularioComponent } from './contato-formulario/contato-formulario.component';
import { ContatosService } from './contatos.service';

import { contatoStatesConfig } from './contato.states';

export const ContatoModule = angular
  .module('contato', [
    uiRouter,
  ])
  .config(contatoStatesConfig)
  .service('ContatosService', ContatosService)
  .component('contatoLista', ContatoListaComponent)
  .component('contatoFormulario', ContatoFormularioComponent)
  .name;