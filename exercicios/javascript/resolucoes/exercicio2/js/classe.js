class Lista {
  constructor() {
    this.nomes = [];
  }
  adicionar() {
    try {
      const nome = this.obterNome();
      if (nome === '') {
        alert('Insira o nome');
      } else {
        this.adicionarNomeNaLista(nome);
      }
    } catch (e) {
      alert('Não foi possível');
    }
  }
  remover() {
    try {
      const nome = this.obterNome();
      if (nome === '') {
        alert('Insira o nome');
      } else {
        this.removerNomeDaLista(nome);
      }
    } catch (e) {
      alert('Não foi possível');
    }
  }
  mostrar() {
    const nomesConcatenados = this.concatenarNomes(lista.nomes);
    alert(nomesConcatenados);
  }
  mostrarComecandoComA() {
    const nomesComA = this.nomes.filter(comecaComA);
    const nomesConcatenados = this.concatenarNomes(nomesComA);
    alert(nomesConcatenados);

    function comecaComA(nome) {
      const primeiraLetra = nome[0];
      if (primeiraLetra === 'a' || primeiraLetra === 'A') {
        return true;
      }
      return false;
    }
  }
  obterNome() {
    const elementoNome = document.getElementById('nome');
    if (typeof elementoNome === 'undefined' || elementoNome === null) {
      throw 'Elemento não encontrado';
    }
    return elementoNome.value;
  }
  adicionarNomeNaLista(nome) {
    if (nome !== '') {
      this.nomes.push(nome);
    }
  }
  removerNomeDaLista(nome) {
    const indice = this.obterIndiceDoNome(nome);
    if (indice < 0) {
      alert('Nome não encontrado');
    } else {
      this.nomes.splice(indice, 1);
    }
  }
  obterIndiceDoNome(nome) {
    const indice = this.nomes.indexOf(nome);
    return indice;
  }
  concatenarNomes(nomes) {
    let nomesConcatenados = '';
    nomes.forEach(concatenarNome);
    return nomesConcatenados;

    function concatenarNome(nome) {
      nomesConcatenados += (nome + '\n');
    }
  }
}

const lista = new Lista();
