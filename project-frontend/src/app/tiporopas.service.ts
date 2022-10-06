import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiporopasService {

  constructor(private httpClientService: HttpClient) { }

  baseUrl = "http://localhost:3000/api/tiposRopa";

  getTipoRopas() {
    return this.httpClientService.get<any>(this.baseUrl);
  }

  getTipoRopaByDetalle = (detalle) => {
    const url = this.baseUrl + `/tr/${detalle}`;
    let tipoRopa;
    this.httpClientService.get<any>(url).subscribe((tipoRopaParam) => tipoRopa = tipoRopaParam.body);
    return new Promise((resolve, reject) => {
      setTimeout( () => {      
        resolve(tipoRopa)
      }, 2500)
    })
  }

}
