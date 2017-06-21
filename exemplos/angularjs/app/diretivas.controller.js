(function () {
  'use strict';

  angular.module('app')
    .controller('DiretivasController', DiretivasController);

  function DiretivasController($scope) {
    $scope.marcado = true;
    $scope.classes = 'teste';
    $scope.classe = '';
    $scope.listaClasses = ['array'];
    // $scope.outrasClasses = { 
    //   'verde-grande': true, 
    //   'borda': false,
    //   'terceira': 'classe === "vai"'
    // };

    $scope.nomeIgualWiley = nomeIgualWiley;
    $scope.colocarNoLog = colocarNoLog;
    $scope.adicionarClasse = adicionarClasse;

    $scope.$watch('marcado', aoMudarNome);
    function aoMudarNome() {
      console.log($scope.marcado);
    }

    function nomeIgualWiley() {
      return $scope.nome === 'Wiley';
    }

    function colocarNoLog() {
      console.log($scope.nome);
    }

    function adicionarClasse() {
      $scope.listaClasses.push($scope.classe);
    }
  }
})();
