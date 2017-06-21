# Exercício 2

## Enunciado

Usuário digita seus dados e os envia para outra página.
Na nova pagina, os dados são exibidos formatados.

## Estrutura

> Nomes dos campos

* Nome
* Email
* Data de nascimento
* Quantidade de filhos
* Cores preferidas
* Conhecimento em HTML
* Tem interesse em desenvolvimento web?
* Comentários

## Comportamento

Quando o `submit` do formulário é acionado, o usuário é redirecionado para a página `resultado.html`, a qual exibe os dados formatados.

## Validações

* Nome não pode ser igual a _teste_
* Email deve ter _@_ e _.com_ sendo parte do texto
* Ano de nascimento não pode ser menor que 1900
* Quantidade de filhos não pode ser menor de 0
* Deve ter selecionado um valor para o campo _Tem interesse em desenvolvimento web?_

## Exibição

* Exibição deve ser feita em um formulário com todos os campos desabilitados, em modo `readonly`
* Campo nome deve começar com letra maiúscula
* Email deve ser apresentado todo com minúsculas
* Se quantidade de filhos for 0 (zero), exibir o texto _nenhum_
* Cores preferidas devem ser exibidas com sua representação em `rgb`
