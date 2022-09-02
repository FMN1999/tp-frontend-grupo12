import { Component, Input, OnInit } from '@angular/core';
import { TipoRopaReqResResponse } from '../../models/tiporopa-reqres-response';

@Component({
  selector: 'app-tiporopa',
  templateUrl: './tiporopa.component.html',
  styleUrls: ['./tiporopa.component.css']
})
export class TiporopaComponent implements OnInit {

  @Input() tiporopa: TipoRopaReqResResponse

  constructor() { }

  ngOnInit(): void {
  }

}
