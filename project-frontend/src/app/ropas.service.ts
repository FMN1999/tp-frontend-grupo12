import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RopasService {

  readonly baseURL = "http://localhost:4200/api/";

  constructor(private http: HttpClient) { }

  getRopas() {
    const url = this.baseURL + "ropas";
      return this.http.get<any>(url);
  }
}
