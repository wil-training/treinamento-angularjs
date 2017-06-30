(function () {
  'use strict';

  const listaComponent = {
    templateUrl: 'app/componentes/lista/template.html',
    bindings: {
      'cadastros': '<nomes'
    },
    controller: 'ListaController'
  };

  angular.module('app')
    .component('lista', listaComponent);
})();
