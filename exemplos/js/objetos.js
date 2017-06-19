(function () {
  'use strict';

  const variavel = 10;

  const objeto = {
    nome: 'João',
    sobrenome: 'Silva',
    executar: function () {},
    outraFuncao: outraFuncao,
    idade: variavel
  };

  function outraFuncao() {
    console.log('passou aqui');
  }

  objeto.nome = 'Maria';

  console.log(objeto.outraFuncao);

  // console.log(objeto.nome);
})();

(function() {
  // objeto.outraFuncao(); // não funciona
  // outraFuncao(); // não funciona
})();
