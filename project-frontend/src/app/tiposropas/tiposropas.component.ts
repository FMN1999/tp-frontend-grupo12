import { Component, OnInit } from '@angular/core';
import { TiporopasService } from '../tiporopas.service';

@Component({
  selector: 'app-tiposropas',
  templateUrl: './tiposropas.component.html',
  styleUrls: ['./tiposropas.component.css']
})
export class TiposropasComponent implements OnInit {

  tiposRopas:any= [];
  constructor(private tiporopaService: TiporopasService) {}

  
  loadTiposRopas(){
    this.tiporopaService.getTipoRopas().subscribe(response => this.tiposRopas = response);
  }

  ngOnInit(): void{
    this.loadTiposRopas();
  }

}
