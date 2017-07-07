import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ContatoModule } from './contato/contato.module';

export const app = angular
  .module('app', [
    ContatoModule,
    uiRouter,
  ])
  .config(($locationProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);
  })
  .component('app', AppComponent)
  .component('navbar', NavbarComponent)
  .name;