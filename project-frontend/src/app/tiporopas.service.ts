import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoRopaReqResResponse } from './models/tiporopa-reqres-response';

@Injectable({
  providedIn: 'root'
})
export class TiporopasService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000";

  getTipoRopas() {
    const url = this.baseUrl + "/api/tiposRopa";
    return this.http.get<TipoRopaReqResResponse>(url);
  }
}
