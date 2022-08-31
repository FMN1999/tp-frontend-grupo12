import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreciosropaService {

  readonly baseURL = "http://localhost:3000/api/";

  constructor(private httpClientService: HttpClient) { }

  getPreciosRopa() {
    const url = this.baseURL + "preciosRopa";
    return this.httpClientService.get<any>(url);
  }
}
