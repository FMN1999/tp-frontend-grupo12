import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComentariosRopaService } from 'app/services/comentarios-ropa.service';

@Component({
  selector: 'app-comentario-ropa',
  templateUrl: './comentario-ropa.component.html',
  styleUrls: ['./comentario-ropa.component.css']
})
export class ComentarioRopaComponent implements OnInit {

  id_ropa: String = null;
  comentarios:any= [];

  constructor(private comentariosRopaService: ComentariosRopaService, private router:Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id_ropa = this.route.snapshot.params['id'];
    this.listarComentarios(this.id_ropa);
  }

  listarComentarios(id){
    this.comentariosRopaService.getComentariosById(id).subscribe( response => this.comentarios = response.body)
  }

}