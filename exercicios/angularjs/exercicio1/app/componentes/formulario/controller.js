(function () {
  'use strict';

  class FormularioController {
    constructor($http) {
      this.$http = $http;
      this.pessoa = {};
    }
    $onInit() {
      const aoCarregarPessoa = (response) => {
        debugger;
        this.pessoa = response.data;
      };

      const promise = this.$http.get('data/pessoa.json');
      promise.then(aoCarregarPessoa);

      // function aoCarregarPessoa(response) {
      //   debugger;
      //   this.pessoa = response.data;
      // }
    }
    enviar() {
      const mostrarIdade = confirm('Deseja mostrar a idade?');

      let exibicao = `Nome: ${this.nome}\nSobrenome: ${this.sobrenome}`;
      if (mostrarIdade === true) {
        exibicao += `\nIdade: ${this.idade}`;
      }

      alert(exibicao);
    }
  }

  FormularioController.$inject = ['$http'];

  angular.module('nozes')
    .controller('FormularioController', FormularioController);

})();
