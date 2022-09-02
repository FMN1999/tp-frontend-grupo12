import { Component, Input, OnInit } from '@angular/core';
import { ComentarioRopa } from '../../models/comentario-ropa-model';
import { ComentariosRopaService } from '../../comentarios-ropa.service';
import mongoose from 'mongoose';

@Component({
  selector: 'app-comentarios-ropa',
  templateUrl: './comentarios-ropa.component.html',
  styleUrls: ['./comentarios-ropa.component.css']
})
export class ComentariosRopaComponent implements OnInit {

  
  detalle : string;
  idRopa : mongoose.Schema.Types.ObjectId;
  nombreUsuario : string;
  apellidoUsuario : string;
  fecha : string;
  

  constructor(private comentariosRopaService: ComentariosRopaService) { }

  ngOnInit(): void {
  }

  guardarComentario(){
    let comentario = new ComentarioRopa(this.detalle, this.idRopa, this.nombreUsuario, this.apellidoUsuario, this.fecha);
    this.comentariosRopaService.postComentarioRopa(comentario).subscribe( data =>{
    console.log(data)}
    );
  }

}
