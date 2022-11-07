import { Component, Injectable, OnInit } from '@angular/core';
import { RopasService } from '../services/ropas.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable()
@Component({
  selector: 'app-ropas',
  templateUrl: './ropas.component.html',
  styleUrls: ['./ropas.component.css']
})
export class RopasComponent implements OnInit {



  suscripcion:Subscription;
  ropas:any= [];
  search:String = null;
  constructor(private ropaService: RopasService,
              private router: Router) {}


  loadRopas(){
    this.ropaService.getRopas().subscribe(response => this.ropas = response);
  }

  buscar(){
    if (this.search === "") {
      this.loadRopas()
    }else{
      this.ropaService.buscar(this.search).subscribe( response => this.ropas = response);
    }
  }

  ngOnInit(): void{
    if (this.search == null){
      this.loadRopas();
      this.suscripcion = this.ropaService.refresh$.subscribe(() => {
        this.loadRopas();
      })
    } else{
      this.buscar();
    }
  }
}
