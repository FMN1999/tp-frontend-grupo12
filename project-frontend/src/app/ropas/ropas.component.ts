import { Component, Injectable, OnInit } from '@angular/core';
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
  search:String = null;
  constructor(private ropaService: RopasService,
              private router: Router) {}


  loadRopas(){
    this.ropaService.getRopas().subscribe(response => this.ropas = response);
  }

  agregar(){
    this.router.navigate(['ropas/agregar']);
  }

  buscar(){
    this.ropaService.buscar(this.search).subscribe( response => this.ropas = response);
  }

  ngOnInit(): void{
    if (this.search === null){
      this.loadRopas()
    } else{
      this.buscar();
    }
  }
}
