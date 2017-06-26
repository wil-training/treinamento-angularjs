(function () {
  'use strict';

  class FormularioController {
    constructor(pessoasFactory) {
      this.pessoasFactory = pessoasFactory;
      this.pessoa = {};
    }
    cadastrar() {
      const aoCadastrar = (pessoa) => {
        debugger;
        alert('Cadastrado com sucesso');
      };
      this.pessoasFactory.cadastrar(this.pessoa)
        .then(aoCadastrar);
    }
    // $onInit() {

      // const aoCarregarPessoa = (pessoa) => {
      //   this.pessoa = pessoa;
      // };

      // const aoFalharCarregarPessoa = (reason) => {
      //   alert(reason);
      // };

      // this.pessoasFactory.carregar(2)
      //   .then(aoCarregarPessoa, aoFalharCarregarPessoa);

      // const aoCarregarPessoa = (response) => {
      //   this.pessoa = response.data;
      // };

      // const promise = this.$http.get('data/pessoa.json');
      // promise.then(aoCarregarPessoa);

      // // function aoCarregarPessoa(response) {
      // //   debugger;
      // //   this.pessoa = response.data;
      // // }
    // }
    // enviar() {
    //   const mostrarIdade = confirm('Deseja mostrar a idade?');

    //   let exibicao = `Nome: ${this.nome}\nSobrenome: ${this.sobrenome}`;
    //   if (mostrarIdade === true) {
    //     exibicao += `\nIdade: ${this.idade}`;
    //   }

    //   alert(exibicao);
    // }
  }

  FormularioController.$$ngIsClass = true; // work-around
  FormularioController.$inject = ['pessoasFactory'];

  angular.module('nozes')
    .controller('FormularioController', FormularioController);

})();
