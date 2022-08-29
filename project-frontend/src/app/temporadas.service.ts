import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemporadasService {

  readonly baseURL = "http://localhost:3000/api/";
  
  constructor(private httpClientService: HttpClient) { }

  getTemporadas() {
    const url = this.baseURL + "temporadas";
    return this.httpClientService.get<any>(url);
  }
}
