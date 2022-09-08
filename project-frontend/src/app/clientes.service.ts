import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======

>>>>>>> branch-guille

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  readonly baseURL = "http://localhost:3000/api/";

  constructor(private httpClientService: HttpClient) { }

  getClientes() {
<<<<<<< HEAD
    const url = this.baseURL + "clientes";
    return this.httpClientService.get<any>(url);
=======
    const url = this.baseUrl + "/api/clientes";
    return this.http.get<any>(url);
>>>>>>> branch-guille
  }
}