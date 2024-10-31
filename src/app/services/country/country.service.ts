import { Injectable } from '@angular/core';
import {State} from '../../types/State';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getStates(){
    return fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then((response: Response) => response.json());
  }

  getAddressDataByCEP(cep: string){
    return fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response: Response) => response.json());
  }
}
