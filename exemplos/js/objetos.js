'use strict';

// Notação literal

const objeto = {
  nome: 'Wiley',
  tamanho: 35
};

// Função construtora

// new Animal(); // funciona

function Animal() {
  this.barulhar = barulhar;

  function barulhar() {
    console.log('Oi, meu nome é ' + this.nome);
  }
}
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
Pessoa.prototype = Object.create(new Animal());
Pessoa.prototype.constructor = Animal.constructor;

// Classes

// new Animal(); // não funciona

class Animal {
  barulhar() {
    console.log('Oi, meu nome é ' + this.nome);
  }
}
class Pessoa extends Animal {
  constructor(nome, idade) {
    super();
    this.nome = nome;
    this.idade = idade;
  }
}

// new Animal(); // funciona