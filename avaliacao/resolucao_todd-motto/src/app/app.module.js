import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { appComponent } from './app.component';
// import { common } from './common/common.module';
// import { components } from './components/components.module';

export const app = angular
  .module('app', [
    uiRouter,
  ])
  .component('app', appComponent)
  .name;
