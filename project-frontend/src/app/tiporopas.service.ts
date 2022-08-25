import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiporopasService {

  readonly baseURL = "http://localhost:3000/api/";

  constructor(private httpClientService: HttpClient) { }

  getTipoRopas() {
    const url = this.baseURL + "tiposRopa";
    return this.httpClientService.get<any>(url);
  }
}
