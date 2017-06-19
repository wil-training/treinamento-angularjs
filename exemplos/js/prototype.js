function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = falar;

function falar() {
  console.log('Oi, meu nome é ' + this.nome);
}

function Ana(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
Ana.prototype = Object.create(Pessoa.prototype);
Ana.prototype.constructor = Pessoa;

const maria = new Pessoa('Maria', 28);
maria.falar(); // Oi, meu nome é Maria

const mariazinha = new Ana('Maria', 56);
