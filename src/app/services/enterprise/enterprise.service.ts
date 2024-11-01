import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Enterprise} from '../../types/Enterprise';
import {environment} from '../../../environments/environment.development';
@Injectable({providedIn: 'root'})

export class EnterpriseService {
  private http = inject(HttpClient);

  getEnterprises(){
    return fetch(environment.API_URL).then((response) => response.json());
  }

  getEnterpriseByID(id: string) {
    return fetch(`${environment.API_URL}/id/${id}`).then((response) => response.json());
  }

  createEnterprise(enterprise: Enterprise){
    return this.http.post(environment.API_URL, enterprise)
  }

  updateEnterprise(enterprise: Enterprise){
    return this.http.put(`${environment.API_URL}/id/${enterprise.id}`, enterprise)
  }

  deleteEnterprise(id: string){
    return fetch(`${environment.API_URL}/id/${id}`, { method: "DELETE" }).then((response) => response.json());
  }

  getEnterpriseByCNPJ(cnpj: string){
    return fetch(`${environment.API_URL}/cnpj/${cnpj}`).then((response) => response.json());
  }
}
