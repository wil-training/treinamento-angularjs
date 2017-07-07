const listaState = {
  name: 'lista',
  url: '/',
  component: 'contatoLista',
  resolve: {
    contatos: ['ContatosService', (contatosService) => {
      return contatosService.obterTodos();
    }]
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
    contato: ['$stateParams', 'ContatosService', ($stateParams, contatosService) => {
      const contatoId = $stateParams.id;
      return contatosService.obter(contatoId);
    }]
  }
};

export const contatoStatesConfig = ($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state(listaState)
    .state(inclusaoState)
    .state(edicaoState);

  $urlRouterProvider.otherwise('/');
}