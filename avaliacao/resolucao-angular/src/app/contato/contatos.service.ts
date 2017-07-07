import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contato } from './contato.model';

@Injectable()
export class ContatosService {
  private url = 'http://localhost:3000/contatos';

  constructor(private http: Http) {

  }

  obterTodos(): Promise<Contato[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Contato[])
      .catch(this.aoFalhar);
  }

  obter(id: number): Promise<Contato> {
    const urlComId = this.url + '/' + id;
    return this.http.get(urlComId)
      .toPromise()
      .then(response => response.json() as Contato)
      .catch(this.aoFalhar);
  }

  criar(contato: Contato): Promise<Contato> {
    return this.http.post(this.url, contato)
      .toPromise()
      .then(response => response.json() as Contato)
      .catch(this.aoFalhar);
  }

  alterar(contato: Contato): Promise<Contato> {
    const urlComId = this.url + '/' + contato.id;
    return this.http.put(urlComId, contato)
      .toPromise()
      .then(response => response.json() as Contato)
      .catch(this.aoFalhar);
  }

  excluir(id: number): Promise<Contato> {
    const urlComId = this.url + '/' + id;
    return this.http.delete(urlComId)
      .toPromise()
      .then(response => {
        debugger;
        response.json() as Contato;
      })
      .catch(this.aoFalhar);
  }

  aoFalhar(response: any): Promise<any> {
    debugger;
    return Promise.reject('Falha ao completar solicitação');
  }
}
