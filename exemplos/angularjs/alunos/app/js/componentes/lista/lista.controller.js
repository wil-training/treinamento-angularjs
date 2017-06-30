(function () {
  'use strict';

  class ListaController {
    constructor(alunosService, $state) {
      this.alunosService = alunosService;
      this.$state = $state;
    }
    excluir(id) {
      const aoConcluir = () => {
        // this.$state.go('lista', {}, {
        //   reload: true
        // });
        this.$state.reload();
        alert('Aluno excluído com sucesso!');
      }
      const aoFalhar = () => {
        alert('Não foi possível excluir!');
      }

      this.alunosService.excluir(id)
        .then(aoConcluir, aoFalhar);
    }
  }

  ListaController.$$ngIsClass = true;
  ListaController.$inject = ['alunosService', '$state'];

  angular.module('app')
    .controller('ListaController', ListaController);
})();
