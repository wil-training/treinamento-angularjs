import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import AppComponent from './app.component';
import ComponentsModule from './components/components.module';

export const app = angular
  .module('app', [
    ComponentsModule,
    uiRouter,
  ])
  .config(($locationProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);
  })
  .component('app', AppComponent)
  .name;