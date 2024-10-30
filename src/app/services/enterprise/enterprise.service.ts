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

  createEnterprise(enterprise: Enterprise){
    this.http.post(this.API_URL, JSON.stringify(enterprise) )
  }
}
