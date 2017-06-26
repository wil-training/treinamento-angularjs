(function () {
  'use strict';

  const componenteDefinicao = {
    templateUrl: 'app/componentes/formulario/formulario.template.html',
    controller: 'FormularioController'
  };

  angular.module('nozes')
    .component('formulario', componenteDefinicao);
})();
