(function () {
  'use strict';

  function appRoutes($stateProvider, $locationProvider, $urlRouterProvider) {

    const listaState = {
      name: 'lista',
      url: '/',
      component: 'lista',
      resolve: {
        contatos: carregarTodosContatos
      }
    };

    const inclusaoState = {
      name: 'cadastro',
      url: '/novo',
      component: 'cadastro'
    };

    const edicaoState = {
      name: 'edicao',
      url: '/contato/{id:int}',
      component: 'cadastro',
      resolve: {
        contato: carregarContatoPorId
      }
    };

    carregarContatoPorId.$inject = ['$stateParams', 'contatosService'];
    function carregarContatoPorId($stateParams, contatosService) {
      const contatoId = $stateParams.id;
      return contatosService.obter(contatoId);
    }

    carregarTodosContatos.$inject = ['contatosService'];
    function carregarTodosContatos(contatosService) {
      return contatosService.obterTodos();
    }

    $stateProvider
      .state(listaState)
      .state(inclusaoState)
      .state(edicaoState);

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
  }

  appRoutes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

  angular.module('app')
    .config(appRoutes);
})();
