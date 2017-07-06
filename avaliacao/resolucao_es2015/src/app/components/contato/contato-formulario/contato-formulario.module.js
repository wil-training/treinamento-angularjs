import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { ContatoFormularioComponent } from './contato-formulario.component';

export const ContatoFormularioModule = angular
  .module('contatoFormulario', [
    uiRouter
  ])
  .component('contatoFormulario', ContatoFormularioComponent)
  .name;