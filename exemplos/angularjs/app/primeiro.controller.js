(function () {
  'use strict';

  angular.module('app')
    .controller('PrimeiroController', PrimeiroController);

  function PrimeiroController($scope) {
    $scope.nome = 'Tânia';
    $scope.sobrenome = '';
  }
})();
