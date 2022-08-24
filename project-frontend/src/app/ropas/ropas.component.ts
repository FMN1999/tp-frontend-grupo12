import { Component, OnInit } from '@angular/core';
import { RopasService } from '../ropas.service';


@Component({
  selector: 'app-ropas',
  templateUrl: './ropas.component.html',
  styleUrls: ['./ropas.component.css']
})
export class RopasComponent implements OnInit {

  
  ropas:any= [];
  constructor(private ropaService: RopasService) {}

  
  loadRopas(){
    this.ropaService.getRopas().subscribe(response => this.ropas = response);
  }

  ngOnInit(): void{
    this.loadRopas();
  }

}
