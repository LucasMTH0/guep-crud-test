import { Injectable } from '@angular/core';
import {State} from '../types/State';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getStates(){
    return this.http.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  }

  getAddressDataByCEP(cep: string){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
