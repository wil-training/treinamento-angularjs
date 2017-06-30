(function () {
  'use strict';

  function pessoaFactory() {
    const pessoa = {
      nome: 'Wil',
      idade: 21,
    };
    return pessoa;
  }

  angular.module('app')
    .factory('pessoaFactory', pessoaFactory);
})();
