import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ropa } from '../../models/ropa.model';
import { RopasService } from '../../ropas.service';

@Component({
  selector: 'app-formulario-ropa',
  templateUrl: './formulario-ropa.component.html',
  styleUrls: ['./formulario-ropa.component.css']
})

export class FormularioRopaComponent implements OnInit {

  marcaInput:string;
  categoriaInput:string;
  talleInput:string;
  detalleInput:string;
  tipoRopaInput:string;
  temporadaInput:string;
  precioRopaInput:string;
  indiceRopa: String;



  //Inyecto el servicio de Router
  constructor(private router: Router,
              private route: ActivatedRoute,
              private ropaService: RopasService) { }

  ngOnInit(): void {

    //Capturo el id que me viene del formulario de ropas.
    this.indiceRopa = this.route.snapshot.params['id'];
    console.log("Indice de ropa: " + this.indiceRopa);
    //Si el índice es diferente de nulo, entonces quiere decir que estamos en modo 'edicion', ya que se ha
    //seleccionado un elemento que no se está agregando, sino que ya se encuentra dentro del arreglo.
    if(this.indiceRopa != null){

      //Busco la ropa en el array de ropas
      let ropa = this.ropaService.getRopaById(this.indiceRopa);


      console.log("Datos ropa: ");
      console.log("-------------------------");
      console.log("Id de ropa: " + ropa._id);
      console.log("Marca de ropa: " + ropa.marca);


      this.marcaInput = ropa.marca;
      this.categoriaInput = ropa.categoria;
      this.talleInput = ropa.talle;
      this.detalleInput = ropa.detalle;
      this.tipoRopaInput = ropa.tipoRopa;
      this.temporadaInput = ropa.temporada;
      this.precioRopaInput = ropa.precioRopa;

    }
  }


  guardarRopa(){

    //Creo el objeto de Ropa
    let ropa1 = new Ropa(this.marcaInput, this.categoriaInput, this.talleInput,
      this.detalleInput, this.tipoRopaInput, this.temporadaInput, this.precioRopaInput);

      //Valido que el índice sea distinto de nulo. Si así ocurre, quiere decir que estamos en modo
      //'edición'
      if(this.indiceRopa){
        //this.ropaService.updateRopa(this.indiceRopa, ropa1);
      }else{
        this.ropaService.agregarRopa(ropa1);
      }

      this.router.navigate(['ropas']);
  }

}
