import { Component, Input, OnInit } from '@angular/core';
import { PrecioRopa } from '../../models/precioropa-reqres-response';

@Component({
  selector: 'app-precioropa',
  templateUrl: './precioropa.component.html',
  styleUrls: ['./precioropa.component.css']
})
export class PrecioropaComponent implements OnInit {

  @Input() precio: PrecioRopa;

  constructor() { }

  ngOnInit(): void {
  }

}
