import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrecioRopa } from '../../models/precioRopa.model';
import { Ropa } from '../../models/ropa.model';
import { Temporada } from '../../models/temporada.model';
import { TipoRopa } from '../../models/tipoRopa.model';
import { RopasService } from '../../services/ropas.service';
import { TemporadasService } from '../../services/temporadas.service';
import { TiporopasService } from '../../services/tiporopas.service';
import {PreciosropaService} from '../../services/preciosropa.service';
import Swal from 'sweetalert2';

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
  indiceRopa: String = null;
  habilitaBoton: boolean;
  modoEliminar: boolean = false;



  //Inyecto el servicio de Router
  constructor(private router: Router,
              private route: ActivatedRoute,
              private ropaService: RopasService,
              private temporadaService: TemporadasService,
              private tipoRopaService: TiporopasService,
              private precioRopaService: PreciosropaService) { }

  ngOnInit(): void {

    this.indiceRopa = this.route.snapshot.params['id'];


    if(this.indiceRopa != null){
      this.habilitaBoton = true;
      document.getElementById('btnAgregar').innerHTML = "Editar";
      this.getRopaById(this.indiceRopa)
      .then( (ropaParam) => this.mapearDeDatos(ropaParam))
    }

  }

  private mapearDeDatos(ropa: Ropa) {
    let propa = ropa.precioRopa;
    let precioRopa = new PrecioRopa();
    let tempo = ropa.temporada;
    let temporada = new Temporada();
    let tpa = ropa.tipoRopa;
    let tipoRopa = new TipoRopa();
    temporada.detalle = tempo['detalle'];
    precioRopa._id = propa['importe'];
    tipoRopa._id = tpa['detalle'];
    this.marcaInput = ropa.marca;
    this.categoriaInput = ropa.categoria;
    this.talleInput = ropa.talle;
    this.detalleInput = ropa.detalle;
    this.tipoRopaInput = tipoRopa._id;
    this.temporadaInput = temporada.detalle;
    this.precioRopaInput = precioRopa._id;

    if(this.marcaInput != null && this.categoriaInput != null && this.talleInput != null
      && this.detalleInput != null && this.tipoRopaInput != null && this.temporadaInput != null 
      && this.precioRopaInput != null){
      this.habilitaBoton = false;
    }

  }

  getRopaById(id:String){
    return this.ropaService.getRopaById(id);
  }

  getTemporadaByDetalle(detalle:string){
    return this.temporadaService.getTemporadaByDetalle(detalle);
  }

  getTipoRopaByDetalle(detalle:string){
    return this.tipoRopaService.getTipoRopaByDetalle(detalle);
  }

  getPrecioRopaByImporte(importe:string){
    return this.precioRopaService.getPrecioRopaByImporte(importe);
  }

  guardarRopa(){
      console.log("Hola");
      let tempoNueva = new Temporada();
      let tipoRopaNueva = new TipoRopa();
      let precioRopaNueva = new PrecioRopa();
      if (this.modoEliminar==false){
        if (this.indiceRopa != null){
          let ropa = new Ropa();
  
          ropa.categoria = this.categoriaInput;
          ropa.detalle = this.detalleInput;
          ropa.marca = this.marcaInput;
          ropa.talle = this.talleInput;
          this.getTemporadaByDetalle(this.temporadaInput)
          .then( (tempo) => {
            tempoNueva = tempo[0];
            ropa.temporada = tempoNueva._id;
          })
          .catch( error => console.log(error));
          this.getTipoRopaByDetalle(this.tipoRopaInput)
          .then( (tipoRopaParam) => {
            tipoRopaNueva = tipoRopaParam[0];
            ropa.tipoRopa = tipoRopaNueva._id;
          })
          .catch(error => console.log(error));
          this.getPrecioRopaByImporte(this.precioRopaInput)
          .then( (proParam) => {
            precioRopaNueva = proParam[0];
            ropa.precioRopa = precioRopaNueva._id;           
            Swal.fire({
              title: 'Estas seguro?',
              text: "Editarás esta prenda",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, editalo!'
            }).then((result) => {
              if (result.isConfirmed) {
                this.ropaService.updateRopa(this.indiceRopa, ropa)
                .subscribe((datos) => console.log("Ropa actualizada correctamente: "));
                this.router.navigate(['']);
                Swal.fire(
                  'Editado!',
                  'La prenda ha sido editada',
                  'success'
                )
              }
            })
          })
          .catch(error => console.log(error));
        }
        else{
          this.getTemporadaByDetalle(this.temporadaInput)
          .then( (tempo) => {
            tempoNueva = tempo[0];
          })
          .catch( error => console.log(error));
          this.getTipoRopaByDetalle(this.tipoRopaInput)
          .then( (tipoRopaParam) => {
            tipoRopaNueva = tipoRopaParam[0];
          })
          .catch(error => console.log(error));
          this.getPrecioRopaByImporte(this.precioRopaInput)
          .then( (proParam) => {
            precioRopaNueva = proParam[0]; 
            let ropa1 = new Ropa(this.marcaInput, this.categoriaInput, this.talleInput,
              this.detalleInput, tipoRopaNueva._id, tempoNueva._id, precioRopaNueva._id);              
              Swal.fire({
                title: 'Estas seguro?',
                text: "Estas a punto de agregar una nueva prenda!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, hazlo!'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.ropaService.agregarRopa(ropa1);
                  this.router.navigate(['']);
                  Swal.fire(
                    'Agregado!',
                    'La prenda a sido agregada',
                    'success'
                  )
                }
              })            
          })
          .catch(error => console.log(error));
        }
      }
  }
  eliminarRopa(){
    this.modoEliminar = true;
    if(this.indiceRopa != null && this.modoEliminar==true){
      Swal.fire({
        title: 'Estas seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, adelante!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.ropaService.eliminarRopa(this.indiceRopa).subscribe((datos) => console.log(datos));
          this.router.navigate(['']);
          Swal.fire(
            'Eliminado!',
            'La prenda ha sido eliminada',
            'success'
          )
          this.modoEliminar = false;        
      }
      })
    }
  }
  buscar(texto_busqueda:String){
    console.log("Texto de búsqueda: " + texto_busqueda);
    this.ropaService.buscar(texto_busqueda);
  }
}