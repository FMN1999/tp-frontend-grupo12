import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  readonly baseURL = "http://localhost:3000/api/";

  constructor(private httpClientService: HttpClient) { }

  getEmpleados() {
<<<<<<< HEAD
    const url = this.baseURL + "empleados";
    return this.httpClientService.get<any>(url);
=======
    const url = this.baseUrl + "/api/empleados";
    return this.http.get<any>(url);
>>>>>>> branch-guille
  }
}
