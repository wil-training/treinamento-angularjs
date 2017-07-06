import angular from 'angular';

import { NavbarModule } from './navbar/navbar.module';
import { ContatoModule } from './contato/contato.module';

export const ComponentsModule = angular
  .module('components', [
    NavbarModule,
    ContatoModule
  ])
  .name;