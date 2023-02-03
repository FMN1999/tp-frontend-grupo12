import { Component, Input, OnInit } from '@angular/core';
import { Ropa } from '../../models/ropa.model';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {

  @Input() ropa: Ropa;
  @Input() indice: string;

  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    document.getElementById('paraVerMas').style.display = 'block';
  }

  ocultar(){
    document.getElementById('paraVerMas').style.display = 'none';
  }

}
