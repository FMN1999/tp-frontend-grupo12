import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Ropa } from './models/ropa.model';

@Injectable({
  providedIn: 'root'
})
export class RopasService {

  readonly baseURL = "http://localhost:3000/api/";

  ropas:any= [];
  constructor(private httpClientService: HttpClient) { }

  getRopas() {
    const url = this.baseURL + "ropas";
    this.ropas = this.httpClientService.get(url); 
    return this.httpClientService.get<any>(url);
  }
  
  //Funcionando correctamente
  getRopaById(id:String){
    const url = this.baseURL + `ropas/${id}`;
    return this.httpClientService.get<any>(url);
  }

  //Funcionando correctamente
  eliminarRopa(id:String){
    const url = this.baseURL + `ropas/${id}`;
    return this.httpClientService.delete<any>(url);
  }

  //Funcionando correctamente
  updateRopa(id:String, ropa:Ropa){
    const url = this.baseURL + `ropas/${id}`;
    return this.httpClientService.put<any>(url, ropa);
  }


  //Funcionando correctamente
  agregarRopa(ropa:Ropa){
    const url = this.baseURL + "ropas";
    this.httpClientService.post(url, ropa)
    .subscribe(response => console.log("Ropa agregada correctamente"), 
    error => console.log("Error al agregar" + error));
  }

}