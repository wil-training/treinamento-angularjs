(function () {
  'use strict';

  function configurarRotas($stateProvider, $locationProvider, $urlRouterProvider) {

    // $stateProvider é o provider usado para configurar as rotas
    // criando "states", estados da aplicação

    // State para página inicial
    const homeState = {
      name: 'home',
      url: '/home',
      component: 'home'
    };

    // Criar state para a página de listagem
    const listaState = {
      name: 'lista',
      url: '/lista',
      component: 'lista',
      resolve: {
        alunos: carregarAlunos
      }
    };
    carregarAlunos.$inject = ['alunosService'];
    function carregarAlunos(alunosService) {
      return alunosService.obterTodos();
    }

    // State para a página de cadastro
    const cadastroState = {
      name: 'cadastro',
      url: '/cadastro',
      component: 'cadastro'
    };

    // State para a página de edição
    const edicaoState = {
      name: 'edicao',
      url: '/cadastro/{id:int}', // URL recebendo id (numérico) como parâmetro
      component: 'cadastro',
      resolve: {
        aluno: carregarAluno
      }
    };
    carregarAluno.$inject = ['alunosService', '$stateParams'];
    function carregarAluno(alunosService, $stateParams) {
      // $stateParams tem todos os parâmetros da rota como suas propriedades
      const id = $stateParams.id;
      // retorna promise e o ui.router vai esperar o retorno dela
      return alunosService.obter(id);
    }

    // Adiciona states ao provider, para ser inicializado
    $stateProvider.state(homeState);
    $stateProvider.state(listaState);
    $stateProvider.state(cadastroState);
    $stateProvider.state(edicaoState);

    // Caso não encontre um state, redireciona para 'home'
    $urlRouterProvider.otherwise('/home');

    // Ativar modo HTML5 para rotas (sem #)
    $locationProvider.html5Mode(true);
  }

  configurarRotas.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

  angular.module('app')
    .config(configurarRotas);
})();
