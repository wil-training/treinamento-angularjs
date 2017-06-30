(function () {
  'use strict';

  const listaComponente = {
    templateUrl: 'js/componentes/lista/lista.template.html',
    controller: 'ListaController',
    bindings: {
      'pessoas': '<'
    }
  };

  angular.module('app')
    .component('lista', listaComponente);
})();
