(function() {
  'use strict';

  const menuComponent = {
    templateUrl: 'js/componentes/menu/menu.template.html',
    controller: 'MenuController'
  };

  angular.module('app')
    .component('menu', menuComponent);
})();
