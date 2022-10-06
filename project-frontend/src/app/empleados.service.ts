import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  readonly baseURL = "http://localhost:3000/api/empleados";

  constructor(private httpClientService: HttpClient) { }

  getEmpleados() {
    return this.httpClientService.get<any>(this.baseURL);
  }
}
