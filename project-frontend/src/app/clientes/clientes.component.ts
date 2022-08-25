import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:any= [];
  constructor(private clienteService: ClientesService) {}

  
  loadCliente(){
    this.clienteService.getClientes().subscribe(response => this.clientes = response);
  }

  ngOnInit(): void{
    this.loadCliente();
  }

}
