(function() {
  'use strict';

  const listaComponent = {
    templateUrl: 'js/componentes/lista/lista.template.html',
    controller: 'ListaController',
    bindings: {
      contatos: '<'
    }
  };

  angular.module('app')
    .component('lista', listaComponent);
})();
