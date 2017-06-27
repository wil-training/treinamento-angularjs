(function() {
  'use strict';

  const corpoComponente = {
    templateUrl: 'js/componentes/corpo/corpo.template.html',
    controller: 'CorpoController'
  };

  angular.module('app')
    .component('corpo', corpoComponente);
})();
