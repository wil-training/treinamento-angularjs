import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { NavbarComponent } from './navbar.component';

export const NavbarModule = angular
  .module('navbar', [
    uiRouter
  ])
  .component('navbar', NavbarComponent)
  .name;