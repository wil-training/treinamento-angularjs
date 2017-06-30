(function() {
  'use strict';

  const formularioComponente = {
    templateUrl: 'js/componentes/formulario/formulario.template.html',
    controller: 'FormularioController',
    bindings: {
      'aoCriarPessoa': '&'
    }
  };

  angular.module('app')
    .component('formulario', formularioComponente);
})();
