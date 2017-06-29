(function () {
  'use strict';

  function configurarRotas($stateProvider, $locationProvider) {

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

    // Adiciona states ao provider, para ser inicializado
    $stateProvider.state(homeState);
    $stateProvider.state(listaState);
    $stateProvider.state(cadastroState);

    // Ativar modo HTML5 para rotas (sem #)
    $locationProvider.html5Mode(true);
  }

  configurarRotas.$inject = ['$stateProvider', '$locationProvider'];

  angular.module('app')
    .config(configurarRotas);
})();
