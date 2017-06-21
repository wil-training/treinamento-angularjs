(function () {
  'use strict';

  angular.module('app')
    .directive('vcAlerta', alertaDiretiva)
    .controller('AlertaController', AlertaController);

  function alertaDiretiva() {
    const definicao = {
      restrict: 'EA',
      // template: '<span>Oi!</span>'
      templateUrl: 'app/diretivas/alerta-template.html',
      // template: function(elemento, atributos) {
      //   return '<span>Oi!</span>';
      // },
      controller: 'AlertaController',
      // require: '^ngModel'
      link: alertaDiretivaLink,
      // scope: true
      scope: {
        'mensagem': '=vcMensagem'
      }
    };
    return definicao;

    function alertaDiretivaLink(scope, elemento, atributos, controller) {
      // console.log('linkou!');
      // debugger;
    }
  }

  function AlertaController($scope) {
    // debugger;
    // $scope.mensagem = 'Olá!'
  }
})();
