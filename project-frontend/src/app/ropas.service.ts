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

<<<<<<< HEAD
  /*
  //Todavía no está codificado
  updateRopa(indiceRopa:number, ropa:Ropa){
    const url = this.baseURL + `ropas/${ropa._id}`;
    let ropa1 = this.ropas[indiceRopa] as Ropa;

    ropa1.categoria = ropa.categoria;
    ropa1.detalle = ropa.detalle;
    ropa1.marca = ropa.marca;
    ropa1.talle = ropa.talle;
    ropa1.temporada = ropa.temporada;
    ropa1.tipoRopa = ropa.tipoRopa;

    this.httpClientService.put(url, ropa1)
    .subscribe( response => console.log("Ropa actualizada"), 
    error => console.log("Error al actualizar") );
=======
  //Funcionando correctamente
  eliminarRopa(id:String){
    const url = this.baseURL + `ropas/${id}`;
    return this.httpClientService.delete<any>(url);
  }

  //Funcionando correctamente
  updateRopa(id:String, ropa:Ropa){
    const url = this.baseURL + `ropas/${id}`;
    return this.httpClientService.put<any>(url, ropa);
>>>>>>> branch-guille
  }


  //Funcionando correctamente
  agregarRopa(ropa:Ropa){
    const url = this.baseURL + "ropas";
    this.httpClientService.post(url, ropa)
    .subscribe(response => console.log("Ropa agregada correctamente"), 
    error => console.log("Error al agregar" + error));
  }
*/
}
