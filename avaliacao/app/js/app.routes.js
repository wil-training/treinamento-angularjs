(function () {
  'use strict';

  // Configura rotas para o projeto

  function appRoutes($stateProvider, $locationProvider) {

    // $stateProvider é o provider usado para configurar as rotas
    // criando "states", estados da aplicação

    // State para página inicial
    const homeState = {
      name: 'home',
      url: '/',
      template: '<h2>Você está na home!</h2>'
    };

    // Criar state para a página de listagem
    const listaState = {
      name: 'lista',
      url: '/lista',
      component: 'lista'
    };

    // State para a página de cadastro
    const cadastroState = {
      name: 'cadastro',
      url: '/cadastro',
      component: 'cadastro'
    };

    // Adiciona states ao provider, para ser inicializado

    // $stateProvider.state(homeState);
    // $stateProvider.state(listaState);
    // $stateProvider.state(cadastroState);

    // Padrão
    $stateProvider
      .state(homeState)
      .state(listaState)
      .state(cadastroState);

    // Ativar modo HTML5 para rotas
    $locationProvider.html5Mode(true);
  }

  appRoutes.$inject = ['$stateProvider', '$locationProvider'];

  angular.module('app')
    .config(appRoutes);
})();
