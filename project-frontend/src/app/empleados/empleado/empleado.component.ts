import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado-reqres-response';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Input() empleado: Empleado;
  
  constructor() { }

  ngOnInit(): void {
  }

}
