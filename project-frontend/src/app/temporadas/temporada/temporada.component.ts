import { Component, Input, OnInit } from '@angular/core';
import { Temporada } from '../../models/temporada-reqres-response';

@Component({
  selector: 'app-temporada',
  templateUrl: './temporada.component.html',
  styleUrls: ['./temporada.component.css']
})
export class TemporadaComponent implements OnInit {

  @Input() temporada: Temporada;

  constructor() { }

  ngOnInit(): void {
  }

}
