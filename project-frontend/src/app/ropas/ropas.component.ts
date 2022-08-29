import { Component, Injectable, OnInit } from '@angular/core';
import { Ropa } from '../models/ropa.model';
import { RopasService } from '../ropas.service';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-ropas',
  templateUrl: './ropas.component.html',
  styleUrls: ['./ropas.component.css']
})
export class RopasComponent implements OnInit {

  ropas:any= [];
  constructor(private ropaService: RopasService, 
              private router: Router) {}


  loadRopas(){
    this.ropaService.getRopas().subscribe(response => this.ropas = response);
  }

  agregar(){
    this.router.navigate(['ropas/agregar']);
  }

  

  ngOnInit(): void{
    this.loadRopas();
  }

}
