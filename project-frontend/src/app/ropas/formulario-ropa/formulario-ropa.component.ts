import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrecioRopa } from '../../models/precioRopa.model';
import { Ropa } from '../../models/ropa.model';
import { Temporada } from '../../models/temporada.model';
import { TipoRopa } from '../../models/tipoRopa.model';
import { RopasService } from '../../ropas.service';
import { TemporadasService } from '../../temporadas.service';
import { TiporopasService } from '../../tiporopas.service';
import {PreciosropaService} from '../../preciosropa.service';

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
  temporada: Temporada;
  deshabilitar: boolean;
  modoEliminar: number;



  //Inyecto el servicio de Router
  constructor(private router: Router,
              private route: ActivatedRoute,
              private ropaService: RopasService,
              private temporadaService: TemporadasService,
              private tipoRopaService: TiporopasService,
              private precioRopaService: PreciosropaService) { }

  ngOnInit(): void {

    //Capturo el id que me viene del formulario de ropas.
    this.indiceRopa = this.route.snapshot.params['id'];
    this.modoEliminar = +this.route.snapshot.queryParams['modoEliminar'];

    //Si el índice es diferente de nulo, entonces quiere decir que estamos en modo 'edicion', ya que se ha
    //seleccionado un elemento que no se está agregando, sino que ya se encuentra dentro del arreglo.

    if(this.indiceRopa != null && this.modoEliminar === 1){
      this.deshabilitar = true;
      this.getRopaById(this.indiceRopa)
      .then( (ropaParam) => this.mapearDeDatos(ropaParam))
    }

    else if(this.indiceRopa != null){
      document.getElementById('btnAgregar').innerHTML = "Editar";
      this.getRopaById(this.indiceRopa)
      .then( (ropaParam) => this.mapearDeDatos(ropaParam))
    }

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
    temporada.detalle = tempo['detalle'];
    precioRopa._id = propa['importe'];
    tipoRopa._id = tpa['detalle'];

    //Mapeo los datos a los campos del formulario
    this.marcaInput = ropa.marca;
    this.categoriaInput = ropa.categoria;
    this.talleInput = ropa.talle;
    this.detalleInput = ropa.detalle;
    this.tipoRopaInput = tipoRopa._id;
    this.temporadaInput = temporada.detalle;
    this.precioRopaInput = precioRopa._id;
  }

  //Método para comunicarme con la capa de servicio, y así obtener una ropa mediante su id.
  getRopaById(id:String){
    return this.ropaService.getRopaById(id);
  }

  //Método para comunicarme con la capa de servicio, y así obtener una temporada mediante su detalle.
  getTemporadaByDetalle(detalle:string){
    return this.temporadaService.getTemporadaByDetalle(detalle);
  }

  //Método para comunicarme con la capa de servicio, y así obtener un tipo de ropa mediante su detalle.
  getTipoRopaByDetalle(detalle:string){
    return this.tipoRopaService.getTipoRopaByDetalle(detalle);
  }

  getPrecioRopaByImporte(importe:string){
    return this.precioRopaService.getPrecioRopaByImporte(importe);
  }

  guardarRopa(){
      //Valido que el índice sea distinto de nulo. Si así ocurre, quiere decir que estamos en modo
      //'edición'

      let tempoNueva = new Temporada();
      let tipoRopaNueva = new TipoRopa();
      let precioRopaNueva = new PrecioRopa();

      if(this.indiceRopa !== null){
        let ropa = new Ropa();

        ropa.categoria = this.categoriaInput;
        ropa.detalle = this.detalleInput;
        ropa.marca = this.marcaInput;
        ropa.talle = this.talleInput;

        //Busco la temporada que ingresé en el campo temporada, mediante su detalle
        this.getTemporadaByDetalle(this.temporadaInput)
        .then( (tempo) => {
          tempoNueva = tempo[0];
          ropa.temporada = tempoNueva._id;
        })
        .catch( error => console.log(error));

        //Busco el tipo de ropa que ingresé en el campo 'tipo de ropa', mediante su detalle
        this.getTipoRopaByDetalle(this.tipoRopaInput)
        .then( (tipoRopaParam) => {
          tipoRopaNueva = tipoRopaParam[0];
          ropa.tipoRopa = tipoRopaNueva._id;
        })
        .catch(error => console.log(error));

        //Busco el precio de ropa que ingresé en el campo 'precio de ropa', mediante su importe
        this.getPrecioRopaByImporte(this.precioRopaInput)
        .then( (proParam) => {
          precioRopaNueva = proParam[0];
          ropa.precioRopa = precioRopaNueva._id;
          this.ropaService.updateRopa(this.indiceRopa, ropa)
          .subscribe((datos) => console.log("Ropa actualizada correctamente: " + datos));
        })
        .catch(error => console.log(error));

      }

      else{

        //Busco la temporada que ingresé en el campo temporada, mediante su detalle
        this.getTemporadaByDetalle(this.temporadaInput)
        .then( (tempo) => {
          tempoNueva = tempo[0];
        })
        .catch( error => console.log(error));

        //Busco el tipo de ropa que ingresé en el campo 'tipo de ropa', mediante su detalle
        this.getTipoRopaByDetalle(this.tipoRopaInput)
        .then( (tipoRopaParam) => {
          tipoRopaNueva = tipoRopaParam[0];
        })
        .catch(error => console.log(error));

        //Busco el precio de ropa que ingresé en el campo 'precio de ropa', mediante su importe
        this.getPrecioRopaByImporte(this.precioRopaInput)
        .then( (proParam) => {
          precioRopaNueva = proParam[0];
          console.log(precioRopaNueva.fechaDesde);
          let ropa1 = new Ropa(this.marcaInput, this.categoriaInput, this.talleInput,
            this.detalleInput, tipoRopaNueva._id, tempoNueva._id, precioRopaNueva._id);
            this.ropaService.agregarRopa(ropa1);

        })
        .catch(error => console.log(error));
      }

      this.router.navigate(['']);
  }

  eliminarRopa(){
    //Compruebo si el índice es diferente de nulo
    if(this.indiceRopa != null){
      this.ropaService.eliminarRopa(this.indiceRopa).subscribe((datos) => console.log(datos));
    }

    this.router.navigate(['']);
  }

  buscar(texto_busqueda:String){
    this.ropaService.buscar(texto_busqueda);
  }
}
