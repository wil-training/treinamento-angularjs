(function () {
  'use strict';

  angular.module('app')
    .controller('MeuController', MeuController);

  function MeuController($scope) {
    $scope.teste = 'Oi, eu sou o Controller!';

    $scope.aoMudarTeste = aoMudarTeste;

    function aoMudarTeste(valor) {
      debugger;
      $scope.teste = valor;
    }
  }
})();
