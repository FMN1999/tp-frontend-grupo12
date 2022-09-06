import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000";

  getEmpleados() {
    const url = this.baseUrl + "/api/empleados";
    return this.http.get<any>(url);
  }
}
