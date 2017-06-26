(function() {
  'use strict';

  const listaComponente = {
    templateUrl: 'app/componentes/lista/lista.template.html',
    controller: 'ListaController'
  };

  angular.module('nozes')
    .component('lista', listaComponente);
})();