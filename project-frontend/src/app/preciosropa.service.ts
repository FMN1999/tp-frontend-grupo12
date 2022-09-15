import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrecioRopaReqResResponse } from './models/precioropa-reqres-response';

@Injectable({
  providedIn: 'root'
})
export class PreciosropaService {

  constructor(private httpClientService: HttpClient) { }

  baseUrl = "http://localhost:3000/api/";

  getPreciosRopa() {
    const url = this.baseUrl + "preciosRopa";
    return this.httpClientService.get<any>(url);
  }

  getPrecioRopaByImporte = (importe) => {
    const url = this.baseUrl + `precioRopa/${importe}`;
    let precioRopa;
    this.httpClientService.get<any>(url).subscribe((propaParam) => precioRopa = propaParam.body);
    return new Promise((resolve, reject) => {
      setTimeout( () => {      
        resolve(precioRopa)
      }, 2500)
    })
  }
}
