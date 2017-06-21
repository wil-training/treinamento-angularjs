const lista = {
  nomes: [],
  adicionar: adicionar,
  remover: remover,
  mostrar: mostrar,
  mostrarComecandoComA: mostrarComecandoComA
};

function adicionar() {
  try {
    const nome = obterNome();
    if (nome === '') {
      alert('Insira o nome');
    } else {
      adicionarNomeNaLista(nome);
    }
  } catch (e) {
    debugger;
    alert('Não foi possível');
  }
}

function remover() {
  try {
    const nome = obterNome();
    if (nome === '') {
      alert('Insira o nome');
    } else {
      removerNomeDaLista(nome);
    }
  } catch (e) {
    alert('Não foi possível');
  }
}

function obterNome() {
  const elementoNome = document.getElementById('a');
  if (typeof elementoNome === 'undefined' || elementoNome === null) {
    throw 'Elemento não encontrado';
  }
  return elementoNome.value;
}

function adicionarNomeNaLista(nome) {
  if (nome !== '') {
    lista.nomes.push(nome);
  }
}

function removerNomeDaLista(nome) {
  const indice = obterIndiceDoNome(nome);
  if (indice < 0) {
    alert('Nome não encontrado');
  } else {
    lista.nomes.splice(indice, 1);
  }
}

function obterIndiceDoNome(nome) {
  const indice = lista.nomes.indexOf(nome);
  return indice;
}

function mostrar() {
  const nomesConcatenados = concatenarNomes(lista.nomes);
  alert(nomesConcatenados);
}

function mostrarComecandoComA() {
  const nomesComA = lista.nomes.filter(comecaComA);
  const nomesConcatenados = concatenarNomes(nomesComA);
  alert(nomesConcatenados);

  function comecaComA(nome) {
    const primeiraLetra = nome[0];
    if (primeiraLetra === 'a' || primeiraLetra === 'A') {
      return true;
    }
    return false;
  }
}

function concatenarNomes(nomes) {
  let nomesConcatenados = '';
  nomes.forEach(concatenarNome);
  return nomesConcatenados;

  function concatenarNome(nome) {
    nomesConcatenados += (nome + '\n');
  }
}
