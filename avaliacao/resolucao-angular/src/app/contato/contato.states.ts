import { UIRouter, StatesModule, Ng2StateDeclaration, Transition } from "@uirouter/angular";

import { ContatosService } from './contatos.service';
import { ContatoListaComponent } from './contato-lista/contato-lista.component';
import { ContatoFormularioComponent } from './contato-formulario/contato-formulario.component';

const listaState: Ng2StateDeclaration = {
  name: 'lista',
  url: '/',
  component: ContatoListaComponent,
  resolve: [
    {
      token: 'contatos',
      deps: [
        ContatosService
      ],
      resolveFn: (ContatosService: ContatosService) => ContatosService.obterTodos()
    }
  ]
};

const inclusaoState: Ng2StateDeclaration = {
  name: 'cadastro',
  url: '/novo',
  component: ContatoFormularioComponent
};

const edicaoState: Ng2StateDeclaration = {
  name: 'edicao',
  url: '/contato/{id:int}',
  component: ContatoFormularioComponent,
  resolve: [
    {
      token: 'contato',
      deps: [
        ContatosService,
        Transition
      ],
      resolveFn: (ContatosService: ContatosService, transition: Transition) => {
        const contatoId = transition.params().id;
        return ContatosService.obter(contatoId);
      }
    }
  ]
};

export const contatoStatesConfig: StatesModule = {
  states: [
    listaState,
    inclusaoState,
    edicaoState
  ],
  config: (router: UIRouter) => {
    router.urlService.rules.otherwise('/');
  }
}