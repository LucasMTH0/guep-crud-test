import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Enterprise} from '../../types/Enterprise';


@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  private http = inject(HttpClient);
  private API_URL: string = 'http://localhost:9090/api/enterprises';


  getEnterprises(){
    return fetch(this.API_URL).then((response) => response.json());
  }

  getEnterpriseByID(id: string) {
    return fetch(`${this.API_URL}/id/${id}`).then((response) => response.json());
  }

  createEnterprise(enterprise: Enterprise){
    return this.http.post(this.API_URL, enterprise)
  }

  updateEnterprise(enterprise: Enterprise){
    return this.http.put(`${this.API_URL}/${enterprise.id}`, enterprise)
  }

  deleteEnterprise(id: string){
    return fetch(`${this.API_URL}/${id}`, { method: "DELETE" }).then((response) => response.json());
  }

  getEnterpriseByCNPJ(cnpj: string){
    return fetch(`${this.API_URL}/cnpj/${cnpj}`).then((response) => response.json());
  }
}
