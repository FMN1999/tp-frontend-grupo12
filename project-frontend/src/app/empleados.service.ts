import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  readonly baseURL = "http://localhost:3000/api/";

  constructor(private httpClientService: HttpClient) { }

  getEmpleados() {
    const url = this.baseURL + "empleados";
    return this.httpClientService.get<any>(url);
  }
}
