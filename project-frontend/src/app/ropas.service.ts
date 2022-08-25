import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RopasService {

  readonly baseURL = "http://localhost:3000/api/";

  constructor(private httpClientService: HttpClient) { }

  getRopas() {
    const url = this.baseURL + "ropas";
    return this.httpClientService.get<any>(url);
  }
}