import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Ropa } from './models/ropa.model';
import { Subject } from 'rxjs';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RopasService {


  private _refresh$ = new Subject<void>();
  readonly baseURL = "http://localhost:3000/api/";

  ropas:any= [];
  constructor(private httpClientService: HttpClient) { }


  get refresh$(){
    return this._refresh$;
  }

  getRopas() {
    const url = this.baseURL+"ropas";
    this.ropas = this.httpClientService.get(url);
    return this.httpClientService.get<any>(url);
  }


  getRopaById = (id) => {
    const url = this.baseURL + `ropas/${id}`;
    let ropa;
    this.httpClientService.get<any>(url).subscribe((ropaParam) => ropa = ropaParam.body);
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve(ropa)
      }, 2500)
    })
  }

  //Funcionando correctamente
  eliminarRopa(id:String){
    const url = this.baseURL + `ropas/${id}`;
    return this.httpClientService.delete<any>(url).pipe(tap(() => {
      this._refresh$.next();
    }));
  }

  //Funcionando correctamente
  updateRopa(id:String, ropa:Ropa){
    const url = this.baseURL + `ropas/${id}`;
    return this.httpClientService.put<any>(url, ropa).pipe(tap( () => {
      this._refresh$.next();
    }));
  }


  //Funcionando correctamente
  agregarRopa(ropa:Ropa){
    const url = this.baseURL +"ropas";
    this.httpClientService.post(url, ropa).pipe(tap( () => {
      this._refresh$.next();
    }))
    .subscribe(response => console.log("Ropa agregada correctamente"));
  }

  buscar = (texto_busqueda) =>{
    const url = this.baseURL + `ropas/ropasSearch/${texto_busqueda}`;
    this.ropas = this.httpClientService.get(url);
    return this.httpClientService.get<any>(url);
  }
}
