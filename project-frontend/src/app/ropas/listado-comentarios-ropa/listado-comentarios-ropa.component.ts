import {Component, Injectable, Input, OnInit} from '@angular/core';
import{ComentarioRopa} from "../../models/comentario-ropa-model";
import { ComentariosRopaService } from '../../services/comentarios-ropa.service';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable()
@Component({
  selector: 'app-listado-comentarios-ropa',
  templateUrl: './listado-comentarios-ropa.component.html',
  styleUrls: ['./listado-comentarios-ropa.component.css']
})
export class ListadoComentariosRopaComponent implements OnInit {

  @Input() id_ropa: String;
  comentarios:any= [];

  constructor(private comentariosRopaService: ComentariosRopaService, private router:Router, private route: ActivatedRoute,) { }


  ngOnInit(): void {
    this.listarComentarios(this.id_ropa);
  }

  listarComentarios(id){
    this.comentariosRopaService.getComentariosById(id).subscribe( response => this.comentarios = response)
  }

}
