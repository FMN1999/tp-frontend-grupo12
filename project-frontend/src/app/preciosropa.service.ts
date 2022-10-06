import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreciosropaService {

  constructor(private httpClientService: HttpClient) { }

  baseUrl = "http://localhost:3000/api/preciosRopa";

  getPreciosRopa() {
    return this.httpClientService.get<any>(this.baseUrl);
  }

  getPrecioRopaByImporte = (importe) => {
    const url = this.baseUrl + `/imp/${importe}`;
    let precioRopa;
    this.httpClientService.get<any>(url).subscribe((propaParam) => precioRopa = propaParam.body);
    return new Promise((resolve, reject) => {
      setTimeout( () => {      
        resolve(precioRopa)
      }, 2500)
    })
  }
}
