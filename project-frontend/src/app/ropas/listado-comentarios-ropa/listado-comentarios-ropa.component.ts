import { Component, Injectable,OnInit } from '@angular/core';
import{ComentarioRopa} from "../../models/comentario-ropa-model";
import { ComentariosRopaService } from '../../comentarios-ropa.service';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable()
@Component({
  selector: 'app-listado-comentarios-ropa',
  templateUrl: './listado-comentarios-ropa.component.html',
  styleUrls: ['./listado-comentarios-ropa.component.css']
})
export class ListadoComentariosRopaComponent implements OnInit {

  idRopa: String;

  constructor(private comentariosRopaService: ComentariosRopaService, private router:Router, private route: ActivatedRoute,) { }

  comentarios:any= [];

  ngOnInit(): void {
    this.idRopa = this.route.snapshot.params['id'];
    this.listarComentarios(this.idRopa);
  }

  listarComentarios(id){
    this.comentarios = this.comentariosRopaService.getComentariosById(id) as ComentarioRopa[]
  }

}
