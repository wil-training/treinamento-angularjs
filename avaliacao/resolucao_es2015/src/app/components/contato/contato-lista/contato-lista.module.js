import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import ContatoListaComponent from './contato-lista.component';

const ContatoListaModule = angular
  .module('contatoLista', [
    uiRouter
  ])
  .component('contatoLista', ContatoListaComponent)
  .name;

export default ContatoListaModule;