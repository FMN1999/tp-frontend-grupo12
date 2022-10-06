import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemporadasService {

  constructor(private httpClientService: HttpClient) { }

  baseUrl = "http://localhost:3000/api/temporadas";

  getTemporadas() {
    return this.httpClientService.get<any>(this.baseUrl);
  }
  
  
  getTemporadaByDetalle = (detalle) => {
    const url = this.baseUrl + `/det/${detalle}`;
    let tempo;
    this.httpClientService.get<any>(url).subscribe( (tempoParam) => tempo = tempoParam.body);
    return new Promise( (resolve, reject) => {  
      setTimeout( () => {      
        resolve(tempo)
      }, 2500)
    }) 
  }

  
}
