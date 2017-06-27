# Passo a passo para criar essa aplicação

Página inicial:

* Criar o arquivo `index.html`
* Criar o módulo `app`
* Vincular o módulo na página inicial (`index.html`)

Corpo:

* Criar o componente principal, `corpo`, com `controller` e `templateUrl`
* Vincular os arquivos na página inicial, `index.html`
* Criar o template do componente `corpo`
* Vincular o template ao componente `corpo`
* Criar o controller do componente `corpo`
* Vincular o controller ao componente `corpo`

Formulário:

* Criar componente `formulario`, com `controller` e `templateUrl`
* Vincular os arquivos na página inicial, `index.html`
* Criar o template do componente `formulario`
* Vincular o template ao componente `formulario`
* Criar o controller do componente `formulario`
* Vincular o controller ao componente `formulario`
* Criar o objeto `pessoa` (o qual está referenciado na view) no controller do componente
* Criar evento `aoCriarPessoa`, enviando um objeto com a propriedade `pessoa` para ser recebido na página _pai_

Lista:

* Criar componente `lista`, com `controller` e `templateUrl`
* Vincular os arquivos na página inicial, `index.html`
* Criar o template do componente `lista`
* Vincular o template ao componente `lista`
* Criar o controller do componente `lista`
* Vincular o controller ao componente `lista`
* Criar `binding` no componente para receber um parâmetro chamado `pessoas`

Serviço:

* Criar serviço para controlar carregarmento e criação de pessoas
* Criar os métodos `obterTodos` e `criar`
* Vincular o arquivo à página inicial, `index.html`
