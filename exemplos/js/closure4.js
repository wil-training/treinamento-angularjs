(function () {
  'use strict';

  debugger;

  let numero = 1;

  function executar() {
    numero = numero + 1;
    console.log(numero);
  }

})();

const funcoes = (function () {
  let numero = 1;

  const obj = {
    executar: executar
  };

  function executar() {
    numero = numero + 1;
    console.log(numero);
  }

  return obj;
})();
