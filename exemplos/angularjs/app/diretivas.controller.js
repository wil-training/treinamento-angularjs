(function () {
  'use strict';

  angular.module('app')
    .controller('DiretivasController', DiretivasController);

  function DiretivasController($scope) {
    $scope.marcado = true;

    $scope.nomeIgualWiley = nomeIgualWiley;

    $scope.$watch('marcado', aoMudarNome);
    function aoMudarNome() {
      console.log($scope.marcado);
    }
    
    function nomeIgualWiley() {
      return $scope.nome === 'Wiley';
    }
  }
})();
