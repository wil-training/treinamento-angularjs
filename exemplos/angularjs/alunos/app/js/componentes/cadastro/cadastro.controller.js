(function () {
  'use strict';

  class CadastroController {
    constructor(alunosService, $state) {
      this.criarAlunoEmBranco();
      this.alunosService = alunosService;
      this.$state = $state;
    }
    $onInit() {
      // debugger;
    }
    criarAlunoEmBranco() {
      this.aluno = {
        nome: '',
        sobrenome: '',
        semestre: ''
      };
    }
    salvar() {
      const _this = this;

      if (_this.aluno.nome === '') {
        alert('Digite o nome!');
        return;
      }

      // const aoCriarAlunoSucesso = () => {
      //   this.criarAlunoEmBranco();
      //   alert('Aluno criado com sucesso!');
      // }
      // const aoCriarAlunoFalha = () => {
      //   alert('Falha ao criar aluno!');
      // }

      const criacao = (_this.aluno.id === null || typeof _this.aluno.id === 'undefined');

      if (criacao === true) {
        _this.alunosService.criar(this.aluno)
          .then(aoConcluir, aoFalhar);
      } else {
        _this.alunosService.alterar(this.aluno)
          .then(aoConcluir, aoFalhar);
      }

      function aoConcluir() {
        if (criacao === true) {
          _this.criarAlunoEmBranco();
          alert('Aluno criado com sucesso!');
        } else {
          _this.$state.go('lista');
          alert('Aluno alterado com sucesso!');
        }
      }
      function aoFalhar() {
        if (criacao === true) {
          alert('Falha ao criar aluno!');
        } else {
          alert('Falha ao alterar aluno!');
        }
      }
    }
  }

  CadastroController.$$ngIsClass = true;
  CadastroController.$inject = ['alunosService', '$state'];

  angular.module('app')
    .controller('CadastroController', CadastroController);
})();
