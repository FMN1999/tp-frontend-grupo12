import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados:any= [];
  constructor(private empleadosService: EmpleadosService) {}


  loadEmpleados(){
    this.empleadosService.getEmpleados().subscribe(response => this.empleados = response);
  }

  ngOnInit(): void{
    this.loadEmpleados();
  }

}
