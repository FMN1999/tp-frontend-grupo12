import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrecioRopa } from 'src/app/models/precioRopa.model';
import { Ropa } from 'src/app/models/ropa.model';
import { Temporada } from 'src/app/models/temporada.model';
import { TipoRopa } from 'src/app/models/tipoRopa.model';
import { RopasService } from 'src/app/ropas.service';

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
    
    
    //Si el índice es diferente de nulo, entonces quiere decir que estamos en modo 'edicion', ya que se ha 
    //seleccionado un elemento que no se está agregando, sino que ya se encuentra dentro del arreglo.
    if(this.indiceRopa != null){

      this.getRopaById(this.indiceRopa)
      .subscribe( (ropaParam) => this.mapearDeDatos(ropaParam.body) );
      
    }


  }

  //Método para comunicarme con la capa de servicio, y así obtener una ropa mediante su id.
  getRopaById(id:String){
    return this.ropaService.getRopaById(id);
  }

  //Método para mapear los datos de la entidad 'ropa', a los campos del formulario
  private mapearDeDatos(ropa: Ropa) {

    //Extraigo las propiedades de los objetos JSON que posee el objeto ropa
    let propa = ropa.precioRopa;
    let precioRopa = new PrecioRopa();
    let tempo = ropa.temporada;
    let temporada = new Temporada();
    let tpa = ropa.tipoRopa;
    let tipoRopa = new TipoRopa();
    temporada._id = tempo['_id'];
    precioRopa._id = propa['_id'];
    tipoRopa._id = tpa['_id'];

    //Mapeo los datos a los campos del formulario
    this.marcaInput = ropa.marca;
    this.categoriaInput = ropa.categoria;
    this.talleInput = ropa.talle;
    this.detalleInput = ropa.detalle;
    this.tipoRopaInput = tipoRopa._id;
    this.temporadaInput = temporada._id;
    this.precioRopaInput = precioRopa._id;
  }

  guardarRopa(){

      //Valido que el índice sea distinto de nulo. Si así ocurre, quiere decir que estamos en modo 
      //'edición'
      if(this.indiceRopa != null){
        let ropa = new Ropa();
        ropa.categoria = this.categoriaInput;
        ropa.detalle = this.detalleInput;
        ropa.marca = this.marcaInput;
        ropa.precioRopa = this.precioRopaInput;
        ropa.talle = this.talleInput;
        ropa.temporada = this.temporadaInput;
        ropa.tipoRopa = this.tipoRopaInput;

        this.ropaService.updateRopa(this.indiceRopa, ropa)
        .subscribe((datos) => console.log("Ropa actualizada correctamente: " + datos));

      }else{
        let ropa1 = new Ropa(this.marcaInput, this.categoriaInput, this.talleInput, 
          this.detalleInput, this.tipoRopaInput, this.temporadaInput, this.precioRopaInput);
        this.ropaService.agregarRopa(ropa1);
      }

      this.router.navigate(['ropas']);
  }


  eliminarRopa(){
    //Compruebo si el índice es diferente de nulo
    if(this.indiceRopa != null){
      this.ropaService.eliminarRopa(this.indiceRopa).subscribe((datos) => console.log(datos));
    }

    this.router.navigate(['ropas']);
  }

}
