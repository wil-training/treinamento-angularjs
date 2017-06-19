class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  falar() {
    console.log('Oi, meu nome é ' + this.nome);
  }
}

class Ana extends Pessoa {
  constructor(nome, idade) {
    super(nome, idade);
  }
}
