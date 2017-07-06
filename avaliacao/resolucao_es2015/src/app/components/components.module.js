import angular from 'angular';

import NavbarModule from './navbar/navbar.module';
import ContatoModule from './contato/contato.module';

const ComponentsModule = angular
  .module('components', [
    NavbarModule,
    ContatoModule
  ])
  .name;

export default ComponentsModule;