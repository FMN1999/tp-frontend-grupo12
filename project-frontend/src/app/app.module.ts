import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesService } from './clientes.service';
import { EmpleadosService } from './empleados.service';
import { PreciosropaService } from './preciosropa.service';
import { RopasService } from './ropas.service';
import { TemporadaComponent } from './temporadas/temporada.component';
import { TemporadasService } from './temporadas.service';
import { TiporopasService } from './tiporopas.service';
import { RopaComponent } from './ropas/ropa/ropa.component';
import { RopasComponent } from './ropas/ropas.component';
import { FormularioRopaComponent } from './ropas/formulario-ropa/formulario-ropa.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TemporadaComponent,
    RopaComponent, 
    RopasComponent, 
    FormularioRopaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [RopasService, ClientesService, 
    TiporopasService, TemporadasService, 
    PreciosropaService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
