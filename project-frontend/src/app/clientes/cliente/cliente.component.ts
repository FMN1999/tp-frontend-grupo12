import { Component, Input, OnInit } from '@angular/core';
import { ClienteReqResResponse } from '../../models/cliente-reqres-response';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() cliente: ClienteReqResResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
