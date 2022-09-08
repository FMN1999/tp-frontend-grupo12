import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  readonly baseURL = "http://localhost:3000/api/";

  constructor(private httpClientService: HttpClient) { }

  getClientes() {
    const url = this.baseURL + "clientes";
    return this.httpClientService.get<any>(url);
  }
}