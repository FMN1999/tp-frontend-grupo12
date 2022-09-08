import { Component, Input, OnInit } from '@angular/core';
import { ComentarioRopa } from '../../models/comentario-ropa-model';
import { ComentariosRopaService } from '../../comentarios-ropa.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comentarios-ropa',
  templateUrl: './comentarios-ropa.component.html',
  styleUrls: ['./comentarios-ropa.component.css']
})
export class ComentariosRopaComponent implements OnInit {

  
  detalle : string;
  nombreUsuario : string;
  apellidoUsuario : string;
  fecha : string;
  idRopa: String;

  constructor(private comentariosRopaService: ComentariosRopaService, private router:Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.idRopa = this.route.snapshot.params['id'];
  }

  guardarComentario(){
    let comentario = new ComentarioRopa(this.detalle, this.idRopa, this.nombreUsuario, this.apellidoUsuario, this.fecha);
    this.comentariosRopaService.postComentarioRopa(comentario).subscribe( data =>{
    console.log(data)}
    );
  }

}
