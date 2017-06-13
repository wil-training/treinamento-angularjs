function enviar(event) {
  
  const campoNome = document.querySelector('#nome');
  const campoSobrenome = document.querySelector('#sobrenome');
  const campoIdade = document.querySelector('#idade');

  const nome = campoNome.value;
  const sobrenome = campoSobrenome.value;
  const idade = campoIdade.value;

  const mostrarIdade = confirm('Deseja mostrar a idade?');

  let exibicao;
  if (mostrarIdade === true) {
    exibicao = obterExibicaoComIdade(nome, sobrenome, idade);
  } else {
    exibicao = obterExibicaoSemIdade(nome, sobrenome);
  }

  alert(exibicao);

  if (event !== null && typeof event !== 'undefined') {
    event.preventDefault();
  }
}

function obterExibicaoComIdade(nome, sobrenome, idade) {
  const exibicaoNome = 'Nome = ' + nome;
  const exibicaoSobrenome = 'Sobrenome = ' + sobrenome;
  const exibicaoIdade = 'Idade = ' + idade;

  const exibicaoCompleta = exibicaoNome + ' - ' + 
                           exibicaoSobrenome + ' - ' + 
                           exibicaoIdade;

  return exibicaoCompleta;
}

function obterExibicaoSemIdade(nome, sobrenome) {
  const exibicaoNome = 'Nome = ' + nome;
  const exibicaoSobrenome = 'Sobrenome = ' + sobrenome;

  const exibicaoCompleta = exibicaoNome + ' - ' + 
                           exibicaoSobrenome;

  return exibicaoCompleta;
}
