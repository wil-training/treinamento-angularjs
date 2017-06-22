(function () {
  'use strict';

  const cadastroComponent = {
    templateUrl: 'app/componentes/cadastro/template.html',
    bindings: {
      'aoCriar': '&'
    },
    controller: 'CadastroController'
  };

  angular.module('app')
    .component('cadastro', cadastroComponent);
})();
