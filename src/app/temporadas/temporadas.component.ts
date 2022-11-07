import { Component, OnInit } from '@angular/core';
import {TemporadasService} from '../services/temporadas.service';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.css']
})
export class TemporadasComponent implements OnInit {

  temporadas:any= [];
  constructor(private temporadaService: TemporadasService) {}


  loadTemporadas(){
    this.temporadaService.getTemporadas().subscribe(response => this.temporadas = response);
  }

  ngOnInit(): void{
    this.loadTemporadas();
  }

}
