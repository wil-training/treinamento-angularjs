(function () {
  'use strict';

  class PrimeiroController {
    constructor() {
      this.nome = 'Wil';
    }
    $onInit() {
      // aqui as propriedades estão disponíveis
      console.log(this.nome); // Wil
    }
  }

  class SegundoController {

  }

  angular.module('app')
    .controller('PrimeiroController', PrimeiroController)
    .controller('SegundoController', SegundoController);

  // COMENTÁRIO EM VERMELHO !!!
  // EVITAR O ABAIXO ->>

  // function PrimeiroController($scope) {
  //   // $scope.primeiroCtrl = {
  //   //   nome: 'Wil'
  //   // };
  //   // $scope.nome = 'Wil';
  //   this.nome = 'Wil';
  // }

  // function SegundoController($scope) {
  //   // $scope.nome = 'Wiley'; 
  // }
})();
