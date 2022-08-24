import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RopasService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000";

  getRopas() {
    const url = this.baseUrl + "/api/ropas";
    return this.http.get<ReqResResponse>(url);
  }

  getDetalleRopas() {
    const url = this.baseUrl + "/api/ropasDetalles";
    return this.http.get<ReqResResponse>(url);
  }

  getCategoriaRopas() {
    const url = this.baseUrl + "/api/ropasCate";
    return this.http.get<ReqResResponse>(url);
  }

  cargarRopa(id:any){
    const url = this.baseUrl + "/ropas/"+ id;
    return this.http.get<ReqResResponse>(url);
  }
