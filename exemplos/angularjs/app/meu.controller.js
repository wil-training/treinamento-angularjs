(function () {
  'use strict';

  angular.module('app')
    .controller('MeuController', MeuController);

  function MeuController($scope) {
    $scope.teste = 'Oi, eu sou o Controller!';
  }
})();
