import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TemporadaReqResResponse } from '../models/temporada-reqres-response';


@Injectable({
  providedIn: 'root'
})
export class TemporadasService {

  constructor(private httpClientService: HttpClient) { }

  baseUrl = "http://localhost:3000/api/";

  getTemporadas() {
    const url = this.baseUrl+"temporadas";
    return this.httpClientService.get<any>(url);
  }

  getTemporadaByDetalle = (detalle) => {
    const url = this.baseUrl + `temporadas/temporada/${detalle}`;
    let tempo;
    this.httpClientService.get<any>(url).subscribe( (tempoParam) => tempo = tempoParam.body);
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve(tempo)
      }, 2500)
    })
  }
}
