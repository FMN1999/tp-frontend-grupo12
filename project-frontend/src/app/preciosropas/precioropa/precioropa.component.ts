import { Component, Input, OnInit } from '@angular/core';
import { PrecioRopaReqResResponse } from '../../models/precioropa-reqres-response';

@Component({
  selector: 'app-precioropa',
  templateUrl: './precioropa.component.html',
  styleUrls: ['./precioropa.component.css']
})
export class PrecioropaComponent implements OnInit {

  @Input() precio: PrecioRopaReqResResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
