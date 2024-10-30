import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Enterprise} from '../../types/Enterprise';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  private API_URL: string = 'http://localhost:9080/enterprises';
  constructor(private http: HttpClient) { }

  getEnterprises(){
    return this.http.get(this.API_URL)
  }

  searchEnterprise(id: string) {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  createEnterprise(enterprise: Enterprise){
    return this.http.post(this.API_URL, JSON.stringify(enterprise) )
  }

  updateEnterprise(enterprise: Enterprise){
    return this.http.put(`${this.API_URL}/${enterprise.id}`, JSON.stringify(enterprise) )
  }

  deleteEnterprise(id: string){
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  getEnterpriseByCNPJ(cnpj: string){
    return fetch(`${this.API_URL}?cnpj=${cnpj}`)
  }
}
