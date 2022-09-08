import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======

>>>>>>> branch-guille

@Injectable({
  providedIn: 'root'
})
export class PreciosropaService {

<<<<<<< HEAD
  readonly baseURL = "http://localhost:3000/api/";

  constructor(private httpClientService: HttpClient) { }

  getPreciosRopa() {
    const url = this.baseURL + "preciosRopa";
    return this.httpClientService.get<any>(url);
=======
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
      }, 5000)
    })
>>>>>>> branch-guille
  }
}
