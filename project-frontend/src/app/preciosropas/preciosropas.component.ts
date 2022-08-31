import { Component, OnInit } from '@angular/core';
import {PreciosropaService} from '../preciosropa.service';

@Component({
  selector: 'app-preciosropas',
  templateUrl: './preciosropas.component.html',
  styleUrls: ['./preciosropas.component.css']
})
export class PreciosropasComponent implements OnInit {

  precios:any= [];
  constructor(private precioService: PreciosropaService) {}

  
  loadPrecios(){
    this.precioService.getPreciosRopa().subscribe(response => this.precios = response);
  }

  ngOnInit(): void{
    this.loadPrecios();
  }

}
