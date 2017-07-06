import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { ContatoListaComponent } from './contato-lista.component';

export const ContatoListaModule = angular
  .module('contatoLista', [
    uiRouter
  ])
  .component('contatoLista', ContatoListaComponent)
  .name;