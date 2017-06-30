(function () {
  'use strict';

  angular.module('app')
    .controller('ArrayController', ArrayController);

  function ArrayController($scope) {

    // $scope.numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    $scope.nome = '';
    $scope.nomes = [];
    $scope.pares = [];
    $scope.paresCriados = [];
    $scope.dobrados = [];
    $scope.mostrarPares = false;
    $scope.mostraParesCriados = false;
    $scope.impares = [];

    $scope.adicionarNome = adicionarNome;
    $scope.removerNome = removerNome;
    $scope.mostrar = mostrar;
    $scope.esconder = esconder;
    $scope.mostrarParesCriados = mostrarParesCriados;
    $scope.criarPares = criarPares;
    $scope.mostrarDobrados = mostrarDobrados;
    $scope.dobrar = dobrar;
    $scope.limparDobrados = limparDobrados;
    $scope.gerarImpares = gerarImpares;
    $scope.imparesGerados = imparesGerados;
    $scope.existeNaoNumerico = existeNaoNumerico;

    function adicionarNome() {
      if ($scope.nome !== '') {
        $scope.nomes.push($scope.nome);

        const numero = Number($scope.nome);
        const naoNumerico = Number.isNaN(numero);

        if (naoNumerico === false && numero % 2 === 0) {
          $scope.pares.push($scope.nome);
        }
      }
    }

    function removerNome() {
      // $scope.nomes.pop(); // remove o último item
      // $scope.nomes.splice(0, 1);
      const indice = $scope.nomes.indexOf($scope.nome);
      if (indice >= 0) {
        $scope.nomes.splice(indice, 1);
      } else {
        alert('Registro não encontrado');
      }
    }

    function mostrar() {
      $scope.mostrarPares = true;
    }

    function esconder() {
      $scope.mostrarPares = false;
    }

    function mostrarParesCriados() {
      return $scope.mostraParesCriados;
    }

    function criarPares() {
      $scope.paresCriados = [];
      $scope.nomes.forEach(adicionarNomeNoArrayDePares);
    }

    function adicionarNomeNoArrayDePares(nome) {
      const numero = Number(nome);
      const naoNumerico = Number.isNaN(numero);
      if (naoNumerico === false && numero % 2 === 0) {
        $scope.paresCriados.push(numero);
      }
      $scope.mostraParesCriados = true;
    }

    function dobrar() {
      $scope.dobrados = $scope.nomes.map(dobrarNumerico);
    }

    function dobrarNumerico(nome) {
      const numero = Number(nome);
      const naoNumerico = Number.isNaN(numero);
      if (naoNumerico === false) {
        return numero * 2;
      }
      return nome;
    }

    function mostrarDobrados() {
      return $scope.dobrados.length > 0;
    }

    function limparDobrados() {
      $scope.dobrados = [];
    }

    function dobrar() {
      // const dobrados = [];
      // const divididos = dobrados.map(divide);
      // const multiplicados = divididos.map(multiplicar);
      // const subtraidos = multiplicados.map(subtrair);

      const dobrados = [];
      const subtraidos = dobrados
                            .map(divide)
                            .map(multiplicar)
                            .map(subtrair);
    }

    function gerarImpares() {
      $scope.impares = $scope.nomes
                          .map(converterParaNumero)
                          .filter(apenasNumericos)
                          .filter(apenasImpares);

      function converterParaNumero(nome) {
        return Number(nome);
      }

      function apenasNumericos(numero) {
        const naoNumerico = Number.isNaN(numero);
        if (naoNumerico === false) {
          return true;
        }
        return false;
      }

      function apenasImpares(numero) {
        // const par = (numero % 2 === 0);
        if (numero % 2 === 0) {
          return false;
        }
        return true;
      }
    }

    function imparesGerados() {
      return $scope.impares.length > 0;
    }

    function existeNaoNumerico() {
      const existe = $scope.nomes.some(ehNaoNumerico);
      return existe;
      // return $scope.nomes.some(ehNaoNumerico);

      function ehNaoNumerico(nome) {
        const numero = Number(nome);
        const naoNumerico = Number.isNaN(numero);
        // if (naoNumerico === true) {
        //   return true;
        // }
        // return false;
        return naoNumerico;
      }
    }
  }
})();
