import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteReqResResponse } from './models/cliente-reqres-response';
 
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000";

  getClientes() {
    const url = this.baseUrl + "/api/clientes";
    return this.http.get<ClienteReqResResponse>(url);
  }
}