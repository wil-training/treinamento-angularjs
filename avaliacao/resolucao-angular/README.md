# Resolução avaliação AngularJS - Usando Angular 4

## Pré-requisitos

Deve ter [NodeJS](https://nodejs.org/en/) instalado na máquina, recomendado a versão [LTS (6.11.0)](https://nodejs.org/dist/v6.11.0/node-v6.11.0-x64.msi).

Após o NodeJS estar instalado, executar o seguinte comando no _Prompt de Comando_, _PowerShell_ ou _Shell_ (em qualquer pasta), para instalar os pacotes globais:

`npm install -g json-server`

## Iniciar a aplicação

* Abra o prompt de comando
* Navegue até a pasta desse projeto
* Digite o comando `npm install`, caso seja a primeira vez
* Digite o comando `npm start`
* Abra o navegador em [http://localhost:4200](http://localhost:4200)

## Iniciar a API e banco de dados fake

A API já será inicializada quando der o comando `npm start`.

Foi configurado assim para simplificar a execução.

## Arquivos

Os arquivos da aplicação estão na pasta _src_.

Nesta pasta se encontra o arquivo _index.html_, página inicial da aplicação e demais arquivos necessários para o seu funcionamento.

Os arquivos da aplicação estão em _src/app_, com a sua devida hierarquia de pastas.

Os plugins de terceiros são carregados como módulos do _npm_, não sendo mais necessária a pasta _plugins_.

O banco de dados _fake_ está na pasta _data_.