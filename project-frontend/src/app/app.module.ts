import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesService } from './services/clientes.service';
import { EmpleadosService } from './services/empleados.service';
import { PreciosropaService } from './services/preciosropa.service';
import { RopasService } from './services/ropas.service';
import { TemporadaComponent } from './temporadas/temporada.component';
import { TemporadasService } from './services/temporadas.service';
import { TiporopasService } from './services/tiporopas.service';
import { RopaComponent } from './ropas/ropa/ropa.component';
import { RopasComponent } from './ropas/ropas.component';
import { FormularioRopaComponent } from './ropas/formulario-ropa/formulario-ropa.component';
import { FormsModule } from '@angular/forms';
import { TemporadasComponent } from './temporadas/temporadas.component';
import { TiposropasComponent } from './tiposropas/tiposropas.component';
import { TiporopaComponent } from './tiposropas/tiporopa/tiporopa.component';
import { ClienteComponent } from './clientes/cliente/cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { PrecioropaComponent } from './preciosropas/precioropa/precioropa.component';
import { PreciosropasComponent } from './preciosropas/preciosropas.component';
import { ComentariosRopaComponent } from './ropas/comentarios-ropa/comentarios-ropa.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { ComentarioRopaComponent } from './ropas/comentarios-ropa/comentario-ropa/comentario-ropa.component';

@NgModule({
  declarations: [
    AppComponent,
    TemporadaComponent,
    RopaComponent,
    FormularioRopaComponent,
    RopasComponent, TemporadasComponent, TiposropasComponent, TiporopaComponent, ClienteComponent, ClientesComponent, EmpleadosComponent, EmpleadoComponent, PrecioropaComponent, PreciosropasComponent, ComentariosRopaComponent, HomeComponent, HeaderComponent, ComentarioRopaComponent
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
