import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Ropa} from "../models/ropa.model";
import {tap} from "rxjs/operators";
import {Subject} from "rxjs";
import {PrecioRopa} from "../models/precioRopa.model";


@Injectable({
  providedIn: 'root'
})
export class PreciosropaService {

  constructor(private httpClientService: HttpClient) { }

  private _refresh$ = new Subject<void>();
  readonly baseURL = "http://localhost:3000/api/";

  getPreciosRopa() {
    return this.httpClientService.get<any>(this.baseURL);
  }

  agregarPrecioRopa(precioRopa:PrecioRopa){
    const url = this.baseURL +"preciosRopa";
    this.httpClientService.post(url, precioRopa).pipe(tap( () => {
      this._refresh$.next();
    }))
        .subscribe(response => console.log("Precio de ropa agregada correctamente"));
  }

  getPrecioRopaByImporte = (importe) => {
    const url = this.baseURL + `preciosRopa/${importe}`;
    let precioRopa;
    this.httpClientService.get<any>(url).subscribe((propaParam) => precioRopa = propaParam.body);
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve(precioRopa)
      }, 2500)
    })
  }
}