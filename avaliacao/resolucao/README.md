# Treinamento AngularJS Boilerplate

## Pré-requisitos

Deve ter [NodeJS](https://nodejs.org/en/) instalado na máquina, recomendado a versão [LTS (6.11.0)](https://nodejs.org/dist/v6.11.0/node-v6.11.0-x64.msi).

Após o NodeJS estar instalado, executar esses comandos no _Prompt de Comando_, _PowerShell_ ou _Shell_ (em qualquer pasta) para instalar os pacotes globais.

`npm install -g json-server`

## Iniciar a aplicação

* Abra o `cmd`
* Navegue até a pasta desse projeto
* Digite o comando `npm install`, caso seja a primeira vez
* Digite o comando `npm start`
* Abra o navegador na url apresentada no `cmd`

## Iniciar a API e banco de dados fake

* Navegue até a pasta `data` do projeto (`cd data`)
* Digite o comando `json-server --watch db.json`

## Arquivos

Os arquivos da aplicação estão na pasta `app`.

Nesta pasta se encontra o arquivo `index.html`, página inicial da aplicação e demais arquivos necessários para o seu funcionamento.

Os arquivos JS estão na pasta `app/js`, com a sua devida hierarquia de pastas.

Os plugins de terceiros estão na pasta `app/plugins`.

O banco de dados _fake_ está na pasta `data`.
