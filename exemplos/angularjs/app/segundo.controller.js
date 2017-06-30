(function () {
  'use strict';

  angular.module('app')
    .controller('SegundoController', SegundoController);

  function SegundoController($scope) {
    $scope.nome = 'Wiley';

    $scope.$watch('nome', aoMudarNome);
    function aoMudarNome(posterior, anterior) {
      if (anterior !== posterior) {
        console.log('Nome mudou de ' + anterior + ' para ' + posterior);
      }
    }
  }
})();
