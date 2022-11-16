import { Component, Injectable, OnInit } from '@angular/core';
import { RopasService } from '../services/ropas.service';
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
  constructor(private ropaService: RopasService) {}

  loadRopas(){
    this.ropaService.getRopas().subscribe(ropasParam => this.ropas = ropasParam.body);
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
