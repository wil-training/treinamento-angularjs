(function() {
  'use strict';

  const navbarComponent = {
    templateUrl: 'js/componentes/navbar/navbar.template.html',
    controller: 'NavbarController'
  };

  angular.module('app')
    .component('navbar', navbarComponent);
})();
