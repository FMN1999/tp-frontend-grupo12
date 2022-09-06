import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000";

  getClientes() {
    const url = this.baseUrl + "/api/clientes";
    return this.http.get<any>(url);
  }
}