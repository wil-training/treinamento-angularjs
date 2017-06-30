(function () {
  'use strict';

  class CorpoController {
    constructor(pessoasService) {
      this.pessoas = [];
      this.pessoasService = pessoasService;
    }
    $onInit() {
      this.carregarPessoas();
    }
    criarPessoa(pessoa) {
      // const novaPessoa = angular.copy(pessoa); // antigo
      const novaPessoa = Object.assign({}, pessoa); // recomendável

      const aoCriarPessoa = (pessoaCriada) => {
        // Recebe objeto pessoa criado no servido
        // Adiciona pessoa criada no servido ao vetor de pessoas da página
        this.pessoas.push(pessoaCriada);
      };
      const aoCriarPessoaFalhar = (mensagem) => {
        alert('Não foi possível criar nova pessoa');
      };

      this.pessoasService
        .criar(novaPessoa)
        .then(aoCriarPessoa, aoCriarPessoaFalhar);
    }
    carregarPessoas() {
      const aoCarregarPessoas = (pessoas) => {
        // Colocar as pessoas recebidas pelo servidor na propriedade pessoas do controller
        // Para poder ser usada na view
        this.pessoas = pessoas;
      };
      const aoCarregarPessoasFalhar = (mensagem) => {
        alert('Não foi possível carregar pessoas');
      };

      this.pessoasService
        .obterTodos()
        .then(aoCarregarPessoas, aoCarregarPessoasFalhar);
    }
  }

  CorpoController.$inject = ['pessoasService'];
  CorpoController.$$ngIsClass = true;

  angular.module('app')
    .controller('CorpoController', CorpoController);
})();
