import { Component, Input, OnInit } from '@angular/core';
import { Ropa } from '../../models/ropa.model';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {

  @Input() rp: any;
  @Input() indice: string;

  constructor() { }

  ngOnInit(): void {
  }

}
