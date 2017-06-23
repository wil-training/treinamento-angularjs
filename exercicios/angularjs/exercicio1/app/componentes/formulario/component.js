(function () {
  'use strict';

  const componenteDefinicao = {
    templateUrl: 'app/componentes/formulario/template.html',
    controller: 'FormularioController'
  };

  angular.module('nozes')
    .component('formulario', componenteDefinicao);
})();
