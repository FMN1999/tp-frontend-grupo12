import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PreciosropaService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000";

  getPreciosRopa() {
    const url = this.baseUrl + "/api/preciosRopa";
    return this.http.get<any>(url);
  }
}
