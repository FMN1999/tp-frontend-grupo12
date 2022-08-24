import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TemporadaReqResResponse } from './models/temporada-reqres-response';

@Injectable({
  providedIn: 'root'
})
export class TemporadasService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000";

  getTemporadas() {
    const url = this.baseUrl + "/api/temporadas";
    return this.http.get<TemporadaReqResResponse>(url);
  }
}
