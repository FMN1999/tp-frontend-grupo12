import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ComentarioRopa } from './models/comentario-ropa-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComentariosRopaService {

  private url = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  postComentarioRopa(comentario: ComentarioRopa): Observable<ComentarioRopa> {
    const direccion = this.url + 'comentariosRopa';
    return this.http.post<ComentarioRopa>(direccion, comentario);
  }

  getComentarios(){
    const direccion = this.url + 'comentariosRopa';
    return this.http.get<ComentarioRopa>(direccion);             
  }
}
