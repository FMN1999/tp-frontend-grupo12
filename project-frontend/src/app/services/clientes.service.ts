import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  readonly baseURL = "http://localhost:3000/api/clientes";

  constructor(private httpClientService: HttpClient) { }

  getClientes() {
    return this.httpClientService.get<any>(this.baseURL);
  }
}