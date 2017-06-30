(function() {
  'use strict';

  const homeComponent = {
    templateUrl: 'js/componentes/home/home.template.html',
    controller: 'HomeController'
  };

  angular.module('app')
    .component('home', homeComponent);
})();
