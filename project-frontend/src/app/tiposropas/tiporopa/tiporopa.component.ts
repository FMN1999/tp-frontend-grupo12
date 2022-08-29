import { Component, Input, OnInit } from '@angular/core';
import { TipoRopa } from 'src/app/models/tiporopa-reqres-response';

@Component({
  selector: 'app-tiporopa',
  templateUrl: './tiporopa.component.html',
  styleUrls: ['./tiporopa.component.css']
})
export class TiporopaComponent implements OnInit {

  @Input() tiporopa: TipoRopa

  constructor() { }

  ngOnInit(): void {
  }

}
