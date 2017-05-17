# World Wide Web

## Surgimento

A *World Wide Web*, também conhecida como *WWW* ou apenas *web*, foi criada para exibição de documentos em hipermídia interligados na internet, a fim de tornar mais fácil o compartilhamento de documentos de pesquisas. 

O primeiro site é o hoje disponibilizado no endereço: [http://info.cern.ch/hypertext/WWW/TheProject.html](http://info.cern.ch/hypertext/WWW/TheProject.html)

Nesse site é possível obter diversas informações sobre o seu surgimento.

Há inúmeras referências na sua base, código e documentação sobre a sua real intenção no desenvolvimento mesmo esta ter mudado drasticamente nos seus anos de existência.

!!! COLOCAR AQUI IMAGEM SITE DA MICROSOFT !!!

## Como funciona

Para exibir uma página de internet é necessário um navegador compatível o qual realizará uma requisição web e exibirá o retorno para o usuário.

Um site é hospedado em um servidor HTTP (protocolo comumente usado para fornecimento de conteúdo na internet, geralmente páginas em HTML). 

A grosso modo, o usuário digita um endereço no navegador e este envia uma requisição ao servidor onde o site está hospedado. O servidor processa essa informação e retorna o conteúdo requisitado. O navegador recebendo essa informação, renderiza o documento e o exibe ao usuário.

!!! IMAGEM DE REQUISIÇÃO WEB !!!

## WEB 2.0 e SPAs

### Páginas dinâmicas

Até então, os documentos exibidos na internet eram apenas páginas estáticas e não era possível ter seu conteúdo dinamicamente.

Embora essas páginas suprissem a necessidade do momento, com o passar do tempo fomos tendo a necessidade de páginas mais ricas, dinâmicas e interativas. Criando um conceito hoje chamado de WEB 2.0.

### Web 2.0

Web 2.0 foi um termo popularizado pela O'Reilly Media, uma companhia de mídia americana, para conceitualizar a *web como plataforma*.

### Single Page Applications

Com o rápido crescimento da web e a grande quantidade de aplicações sendo desenvolvidas para essa plataforma, a complexidade dessas aplicações foi aumentando.

A fim de se aproximar de uma aplicação desktop, foi criado o conceito de *Single Page App*, ou apenas *SPA*.

Como o próprio nome diz, SPA é basicamente uma aplicação que tem apenas uma página de entrada. Dessa forma o usuário não precisa esperar a aplicação recarregar a página inteira após cada interação, assim melhorando a experiência do usuário, performance e, por conta de aspectos tecnológicos, facilidade de manutenção.

O Google foi um dos pioneiros nesse conceito, tendo o Gmail como seu carro chefe.

!!! IMAGEM DO GMAIL !!!

## Camadas

Uma página web é basicamente divida em 3 camadas: exibição, estilo e comportamento.

*HTML* é a linguagem usada para definir a estrutura da página, contendo a informação propriamente dita.

*CSS* é usada para definir o estilo da página, como tamanho das fontes, cores, etc.

*JavaScript* é responsável pela parte comportamental.

# HTML (HyperText Markup Language)

## Definição e história

Assim como XML (usada para estrutura de dados, comunicação, entre outros), HTML é derivada da SGML, Standard Generalized Markup Language.

Sua estrutura é composta por *tags* (marcadores), delimitadas pelos sinais de menor `<` e maior `>`.

Exemplo de um parágrafo em HTML:

```xml
<p>Um parágrafo em HTML é representado pela tag *p*.</p>
```

## Estrutura

Uma página HTML é composta de cabeçalho e corpo, sendo representados pelas palavras head e body, respectivamente.

No cabeçalho vão informações como o título e outras informações usadas pelos navegadores.

No corpo vai o documento visto pelo usuário. Nele é possível definir toda a estrutura a ser exibida, tal qual as informações nela contidas.

Exemplo de uma página HTML:

```xml
<html>
    <head>
        <title>Título da página</title>
    </head>
    <body>
        <h1>Título exibido no corpo da página</h1>
        <p>Um parágrafo</p>
    </body>
</html>
```

!!! EXIBIR HTML RENDERIZADO !!!

## Tags existentes

Essas são as tags HTML suportadas pelos navegadores atuais:

!!! COLOCAR TABELA DE TAGS !!!

| Nome | Significado |
|--------|--------|
| `<a>` | 	Âncora: usado para ligar a outro recurso web |
| `<abbr>` | 	Abreviação |
| `<address>` | 	Endereço |
| `<area>` | 	Área |
| `<article>` | 	Elemento artigo |
| `<aside>` | 	Elemento à parte |
| `<audio>` | 	Conteúdo de som |
| `<b>` | 	Texto em negrito |
| `<base>` | 	Elemento base |
| `<bdo>` | 	Representa explicitamente a direção do texto |
| `<blockquote>` | 	Bloco de citação |
| `<body>` | 	Corpo da página |
| `<br>` | 	Insere uma quebra de linha |
| `<button>` | 	Botão |
| `<canvas>` | 	Utilizado para a renderização de gráficos |
| `<caption>` | 	Legenda da tabela |
| `<cite>` | 	Citação |
| `<code>` | 	Texto de código computacional |
| `<col>` |  Coluna |
| `<colgroup>` | Grupo de colunas |
| `<command>` | Botão de comando |
| `<datalist>` | Lista suspensa |
| `<dd>` | Definição da descrição |
| `<del>` | Texto suprimido |
| `<details>` | Detalhes |
| `<div>` | Bloco de documento |
| `<dl>` | 	Lista de definição |
| `<dt>` | 	Termo de definição |
| `<em>` | 	Texto enfatizado |
| `<embed>` | Elemento embutido |
| `<fieldset>` | Grupo de campos |
| `<figcaption>` | ? |
| `<figure>` | 	Figura |
| `<footer>` | 	Rodapé da página |
| `<form>` | 	Formulário |
| `<h1>` à `<h6>` |	Títulos, onde o valor 1 representa um título maior do que o valor 6 |
| `<head>` | 	Cabeçalho principal do documento |
| `<header>` | 	Cabeçalho principal da página |
| `<hgroup>` | 	Grupo de títulos |
| `<hr>` | 	Linha horizontal |
| `<html>` | 	Raiz de um documento HTML |
| `<i>` | 	Texto em itálico |
| `<iframe>` | 	Janela de navegação aninhada |
| `<img>` | 	Inclui um imagem |
| `<input>` | 	Campo de entrada |
| `<ins>` | 	Texto inserido |
| `<kbd>` | 	Texto do teclado |
| `<label>` | 	Etiqueta |
| `<legend>` | 	Título de um grupo de controles formulário |
| `<li>` | 	Item de uma lista |
| `<link>` | 	Link de recursos |
| `<map>` | 	Mapa de imagens |
| `<mark>` | 	Marcação |
| `<menu>` | 	Menu de comandos |
| `<meta>` | 	Define um meta-informação |
| `<meter>` | 	Elemento de medida |
| `<nav>` | 	Elemento de navegação |
| `<noscript>` | 	Exibido se scripts estiver desativados |
| `<object>` | 	Objeto incorporado |
| `<ol>` | 	Lista ordenada |
| `<optgroup>` | 	Grupo de opções |
| `<option>` | 	Opção |
| `<output>` | 	Resultado/saída de um cálculo |
| `<p>` | 	Parágrafo |
| `<param>` | 	Define parâmetro de plugins invocados pelos elementos object, não representando nada por si só |
| `<pre>` | 	Texto pré-formatado |
| `<progress>` | 	Progresso da conclusão de uma ação, como por exemplo um download |
| `<q>` | 	Breve citação |
| `<ruby>` | 	Anotação ruby |
| `<rp>` | 	Parenteses de texto ruby |
| `<rt>` | 	Componentes de texto ruby |
| `<samp>` | 	Amostra de programa ou sistema de computação |
| `<script>` | 	Representa um script |
| `<section>` | 	Seção do documento |
| `<select>` | 	Lista selecionável |
| `<small>` | 	Texto pequeno |
| `<source>` | 	Permite indicar diversas fontes para elentos de midia |
| `<span>` | 	Utilizado para um elemento dentro do fluxo de texto |
| `<strong>` | 	Texto grande |
| `<style>` | 	Define um estilo |
| `<sub>` | 	Texto com subscrição |
| `<sup>` | 	Texto sobrescrito |
| `<tbody>` | 	Corpo da tabela |
| `<td>` | 	Célula da tabela |
| `<textarea>` | 	Área de texto |
| `<tfoot>` | 	Rodapé da tabela |
| `<th>` | 	Célula de cabeçalho da tabela |
| `<thead>` | 	Representa o cabeçalho da tabela |
| `<time>` | 	Indica horas |
| `<title>` | 	Título da pagina |
| `<tr>` | 	Linha da tabela |
| `<ul>` | 	Lista não ordenada |
| `<var>` | 	Variável |
| `<video>` | 	Elemento de vídeo ou filme |

## Comentários

Às vezes é necessário colocarmos algum tipo de explicação no código, a fim deste ser facilmente entendido por outra pessoa.

Em HTML, um comentário é iniciado com `<!--` e finalizado com `-->`. Tudo entre essas tags será tratado como comentário, ou seja, não será renderizado pelo navegador.

Exemplo de comentário:

```xml
<!-- Aqui vai um comentário -->
```

## HTML5

### Surgimento

Em 2004, o WHATWG (Web Hypertext Application Technology Working Group) começou a trabalhar em um novo padrão HTML, enquanto a W3C (World Wide Web Consortium) concentrava seus esforços no XHTML. Mas em 2009 os dois grupos se uniram e trabalharam juntos no desenvolvimento do HTML5.

Com o crescimento de dispositivos móveis, como o iPhone, e a morte do Flash, o HTML5 foi ganhando força até tomar conta do mercado e obter suporte em todos os navegadores atuais. Substituindo assim a necessidade de qualquer plugin de terceiros para a criação de páginas web ricas em conteúdo e até mesmo animações.

!!! LOGOTIPO DO HTML5 !!!

### DOCTYPE

DOCTYPE é uma tag usada para informar ao navegador a versão de HTML na página em questão.

Essa tag deve estar obrigatoriamente acima da tag de início da página, html.
A declaração da DOCTYPE no HTML5 é extremamente simples, diferentemente de como era antes.

Exemplo de DOCTYPE antes do HTML5:

```xml
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

DOCTYPE em HTML5:

```xml
<!DOCTYPE html>
```

### HTML Semântico

Antes do HTML5, tentávamos identificar as partes de um documento usando classes de CSS ou IDs fáceis de identificar.

Exemplo:

```xml
<body>

  <div id="cabecalho">
    <!-- Conteúdo do cabeçalho -->
  </div>

  <div class="secao" id="principal">
    <!-- Conteúdo principal -->
  </div>

  <div class="secao" id="destaques">
    <!-- Painéis com destaques -->
  </div>

  <div id="rodape">
    <!-- Conteúdo do rodapé -->
  </div>

</body>
```

Agora com essa *nova* versão de HTML, podemos utilizar novas tags que podem identificar cada parte da página.

Exemplo:

```xml
<body>

  <header>
    <!-- Conteúdo do cabeçalho -->
  </header>

  <section id="principal">
    <!-- Conteúdo principal -->
  </section>

  <section id="destaques">
    <!-- Painéis com destaques -->
  </section>

  <footer>
    <!-- Conteúdo do rodapé -->
  </footer>

</body>
```

Essas novas tags não traz nenhuma diferença no visual, mas traz diversas vantagens por carregarem um significado atrelado à elas.

Algum leitor de tela, por exemplo, agora é capaz de ler o código e identificar as partes importantes de determinada página.

Além disso, os motores de busca utilizam esse código semântico para buscar e mostrar ao usuário o conteúdo realmente interessante à ele.

As *divs* não deixarão de existir pois ainda cumprem bem o papel de agrupar elementos, mas não precisam mais ser usadas para identificar a estrutura semântica da página.

Para explicar todo esse conceito de semântica, o 