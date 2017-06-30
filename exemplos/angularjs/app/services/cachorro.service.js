(function () {
  'use strict';

  function cachorroFactory() {
    const cachorro = {
      nome: 'Miau',
      idade: 2,
      latir: function (){
        console.log('miau');
      }
    };
    return cachorro;
  }

  angular.module('app')
    .factory('CachorroService', cachorroFactory);
})();
