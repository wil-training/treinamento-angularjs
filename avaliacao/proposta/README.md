# Avaliação para o Treinamento de AngularJS - Agenda

> Pode ser feita com consulta a qualquer material necessário, interno e externo.
>
> Deve-se levar em conta as boas práticas e ferramentas apresentadas no treinamento.
>
> Para executar a aplicação e API, leia as instruções em `EXECUCAO.md`

## Introdução

Aplicação para cadastro de contatos (agenda) com listagem, inclusão, edição e exclusão.

Importante colocar links e/ou botões para realizar a navegação na página.

Cada contato deve ter nome, sobrenome e telefone, onde o último deve apenas aceitar números.

## Estrutura

### Página inicial / Listagem

- Lista (tabela) com todos os contatos cadastrados
- Colunas da tabela são: nome, sobrenome, telefone, _editar_ e _excluir_
- Primeira letra de nome e sobrenome devem ser apresentadas com maiúscula, mesmo o contato não estando cadastrado dessa forma
- **A coluna editar deve apresentar um botão que quando clicado leva o usuário para uma página de edição do registro**
- **A coluna excluir deve apresentar um botão que quando clicado exclui o registro**

### Inclusão

Tela com os campos:

- Nome
- Sobrenome
- Telefone (numérico)
- Botão _Salvar_

Funcionamento:

- Ao clicar em _Salvar_, deve-se verificar se as informações foram devidamente preenchidas pelo usuário e _guardá-las_ em um banco de dados

Regras:

- _Nome_ não pode estar vazio
- _Sobrenome_ não pode ser igual a _Nome_, mas pode ser vazio
- _Telefone_ só pode conter números

### Edição

Igual a tela de inclusão, mas carrega um contato já existente e o botão _Salvar_ o atualiza no banco de dados.
