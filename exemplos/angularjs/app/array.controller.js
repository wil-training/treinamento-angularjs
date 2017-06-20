(function () {
  'use strict';

  angular.module('app')
    .controller('ArrayController', ArrayController);

  function ArrayController($scope) {

    // $scope.numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    $scope.nome = '';
    $scope.nomes = [];
    $scope.pares = [];
    $scope.mostrarPares = false;

    $scope.adicionarNome = adicionarNome;
    $scope.removerNome = removerNome;
    $scope.mostrar = mostrar;
    $scope.esconder = esconder;

    function adicionarNome() {
      if ($scope.nome !== '') {
        $scope.nomes.push($scope.nome);

        const numero = Number($scope.nome);
        const naoNumerico = Number.isNaN(numero);

        if (naoNumerico === false && numero % 2 === 0) {
          $scope.pares.push($scope.nome);
        }
      }
    }

    function removerNome() {
      // $scope.nomes.pop(); // remove o último item
      // $scope.nomes.splice(0, 1);
      const indice = $scope.nomes.indexOf($scope.nome);
      if (indice >= 0) {
        $scope.nomes.splice(indice, 1);
      } else {
        alert('Registro não encontrado');
      }
    }

    function mostrar() {
      $scope.mostrarPares = true;
    }

    function esconder() {
      $scope.mostrarPares = false;
    }
  }
})();
