import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import ContatoListaModule from './contato-lista/contato-lista.module';
import ContatoFormularioModule from './contato-formulario/contato-formulario.module';
import ContatosService from './contatos.service';

const ContatoModule = angular
  .module('contato', [
    ContatoListaModule,
    ContatoFormularioModule,
    uiRouter,
  ])
  .service('ContatosService', ContatosService)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    const listaState = {
      name: 'lista',
      url: '/',
      component: 'contatoLista',
      resolve: {
        contatos: (ContatosService) => {
          'ngInject';
          return ContatosService.obterTodos();
        }
        // contatos: /* @ngInject */ ContatosService => ContatosService.obterTodos()
      }
    };

    const inclusaoState = {
      name: 'cadastro',
      url: '/novo',
      component: 'contatoFormulario'
    };

    const edicaoState = {
      name: 'edicao',
      url: '/contato/{id:int}',
      component: 'contatoFormulario',
      resolve: {
        contato: ($stateParams, ContatosService) => {
          'ngInject';
          const contatoId = $stateParams.id;
          return ContatosService.obter(contatoId);
        }
      }
    };

    $stateProvider
      .state(listaState)
      .state(inclusaoState)
      .state(edicaoState);

    $urlRouterProvider.otherwise('/');
  })
  .name;

export default ContatoModule;