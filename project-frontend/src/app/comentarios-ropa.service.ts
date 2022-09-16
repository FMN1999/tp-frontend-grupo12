import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ComentarioRopa } from './models/comentario-ropa-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComentariosRopaService {

  private url = "http://localhost:3000/api/";

  constructor(private httpClientService: HttpClient) { }

  postComentarioRopa(comentario: ComentarioRopa): Observable<ComentarioRopa> {
    const direccion = this.url + 'comentariosropa';
    return this.httpClientService.post<ComentarioRopa>(direccion, comentario);
  }

  getComentarios(){
    const direccion = this.url + 'comentariosropa';
    return this.httpClientService.get<ComentarioRopa>(direccion);
  }

  getComentariosById = (id) => {
    const url = this.url + `comentariosropa/${id}`;
    return this.httpClientService.get<any>(url);
  }
}
