import { Component, Input, OnInit } from '@angular/core';
import { TemporadaReqResResponse } from '../models/temporada-reqres-response';

@Component({
  selector: 'app-temporada',
  templateUrl: './temporada.component.html',
  styleUrls: ['./temporada.component.css']
})
export class TemporadaComponent implements OnInit {

  @Input() temporada: TemporadaReqResResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
