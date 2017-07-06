import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import ContatoFormularioComponent from './contato-formulario.component';

const ContatoFormularioModule = angular
  .module('contatoFormulario', [
    uiRouter
  ])
  .component('contatoFormulario', ContatoFormularioComponent)
  .name;

export default ContatoFormularioModule;