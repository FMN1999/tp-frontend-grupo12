import { Component, Input, OnInit } from '@angular/core';
import { Ropa } from 'src/app/models/ropa.model';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {

  @Input() ropa: Ropa;


  constructor() { }

  ngOnInit(): void {
  }

}
