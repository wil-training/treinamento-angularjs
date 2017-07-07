const url = 'http://localhost:3000/contatos';

export class ContatosService {

  constructor($http, $q) {
    'ngInject';

    this.$http = $http;
    this.$q = $q;
  }

  obterTodos() {
    return this.$http.get(url)
      .then(response => response.data)
      .catch(response => this.aoFalhar(response));
  }

  obter(id) {
    const urlComId = url + '/' + id;
    return this.$http.get(urlComId)
      .then(response => response.data)
      .catch(response => this.aoFalhar(response));
  }

  criar(contato) {
    return this.$http.post(url, contato)
      .then(response => response.data)
      .catch(response => this.aoFalhar(response));
  }

  alterar(contato) {
    const urlComId = url + '/' + contato.id;
    return this.$http.put(urlComId, contato)
      .then(response => response.data)
      .catch(response => this.aoFalhar(response));
  }

  excluir(id) {
    const urlComId = url + '/' + id;
    return this.$http.delete(urlComId)
      .then(response => response.data)
      .catch(response => this.aoFalhar(response));
  }

  aoFalhar(reason) {
    const statusCode = reason.status;

    if (statusCode === 404) {
      return this.$q.reject('Registro não encontrado');
    } else {
      return this.$q.reject('Falha ao completar solicitação');
    }
  }
}