import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiporopasService {

<<<<<<< HEAD
  readonly baseURL = "http://localhost:3000/api/";

  constructor(private httpClientService: HttpClient) { }

  getTipoRopas() {
    const url = this.baseURL + "tiposRopa";
=======
  constructor(private httpClientService: HttpClient) { }

  baseUrl = "http://localhost:3000/api/";

  getTipoRopas() {
    const url = this.baseUrl + "tiposRopa";
>>>>>>> branch-guille
    return this.httpClientService.get<any>(url);
  }

  getTipoRopaByDetalle = (detalle) => {
    const url = this.baseUrl + `tipoRopa/${detalle}`;
    let tipoRopa;
    this.httpClientService.get<any>(url).subscribe((tipoRopaParam) => tipoRopa = tipoRopaParam.body);
    return new Promise((resolve, reject) => {
      setTimeout( () => {      
        resolve(tipoRopa)
      }, 3000)
    })
  }

}
