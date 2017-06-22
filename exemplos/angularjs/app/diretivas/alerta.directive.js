(function () {
  'use strict';

  class AlertaController {
    aoMudarMensagem() {
      debugger;
      this.avisarMudancaMensagem({
        mensagem: this.mensagem
      });
    }
  }

  function alertaDiretiva() {
    const definicao = {
      restrict: 'EA',
      // template: '<span>Oi!</span>'
      templateUrl: 'app/diretivas/alerta-template.html',
      // template: function(elemento, atributos) {
      //   return '<span>Oi!</span>';
      // },
      // controller: 'AlertaController',
      // controller: 'AlertaController as alertaCtrl',
      controller: 'AlertaController',
      controllerAs: 'alertaCtrl',
      // require: '^ngModel'
      link: alertaDiretivaLink,
      // scope: true // cria novo $scope herdando do pai
      // scope: { // cria escopo isolado
      //   // 'mensagem': '=vcMensagem', // two-way binding (bidirecional)
      //   // 'mensagem': '@vcMensagem', // texto, não é two-way binding
      //   'mensagem': '<vcMensagem', // one-way, somente recebe, a mudança não é enviada
      //   'avisarMudancaMensagem': '&vcAoMudarMensagem'
      // },
      // bindToController: true
      bindToController: {
        'mensagem': '<vcMensagem', // one-way, somente recebe, a mudança não é enviada
        'avisarMudancaMensagem': '&vcAoMudarMensagem'
      }
    };
    return definicao;

    function alertaDiretivaLink(scope, elemento, atributos, controller) {
      // console.log('linkou!');
      // debugger;
    }
  }

  // function AlertaController($scope) {
  //   // this.mensagem = $scope.mensagem;

  //   this.aoMudarMensagem = aoMudarMensagem;

  //   // // debugger;
  //   // // $scope.mensagem = 'Olá!'

  //   // $scope.aoMudarMensagem = aoMudarMensagem;

  //   function aoMudarMensagem() {
  //     debugger;
  //     // $scope.avisarMudancaMensagem({
  //     //   mensagem: $scope.mensagem
  //     // });
  //     this.avisarMudancaMensagem({
  //       mensagem: this.mensagem
  //     });
  //     // $scope.avisarMudancaMensagem($scope.mensagem);
  //   }
  // }

  angular.module('app')
    .directive('vcAlerta', alertaDiretiva)
    .controller('AlertaController', AlertaController);
})();
