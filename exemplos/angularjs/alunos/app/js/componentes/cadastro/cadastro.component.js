(function() {
  'use strict';

  const cadastroComponent = {
    templateUrl: 'js/componentes/cadastro/cadastro.template.html',
    controller: 'CadastroController',
    bindings: {
      aluno: '<'
    }
  };

  angular.module('app')
    .component('cadastro', cadastroComponent);
})();
