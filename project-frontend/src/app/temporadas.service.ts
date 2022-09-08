import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemporadasService {

<<<<<<< HEAD
  readonly baseURL = "http://localhost:3000/api/";
  
  constructor(private httpClientService: HttpClient) { }

  getTemporadas() {
    const url = this.baseURL + "temporadas";
=======
  constructor(private httpClientService: HttpClient) { }

  baseUrl = "http://localhost:3000/api/";

  getTemporadas() {
    const url = this.baseUrl + "temporadas";
>>>>>>> branch-guille
    return this.httpClientService.get<any>(url);
  }
  
  
  getTemporadaByDetalle = (detalle) => {
    const url = this.baseUrl + `temporada/${detalle}`;
    let tempo;
    this.httpClientService.get<any>(url).subscribe( (tempoParam) => tempo = tempoParam.body);
    return new Promise( (resolve, reject) => {  
      setTimeout( () => {      
        resolve(tempo)
      }, 3000)
    }) 
  }

  
}
