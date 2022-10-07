import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoRopaReqResResponse } from './models/tiporopa-reqres-response';

@Injectable({
  providedIn: 'root'
})
export class TiporopasService {

  constructor(private httpClientService: HttpClient) { }

  baseUrl = "http://localhost:3000/api/";

  getTipoRopas() {
    const url = this.baseUrl+"tiposRopa";
    return this.httpClientService.get<any>(url);
  }

  getTipoRopaByDetalle = (detalle) => {
    const url = this.baseUrl + `tiposRopa/tipoRopa/${detalle}`;
    let tipoRopa;
    this.httpClientService.get<any>(url).subscribe((tipoRopaParam) => tipoRopa = tipoRopaParam.body);
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve(tipoRopa)
      }, 2500)
    })
  }

}
