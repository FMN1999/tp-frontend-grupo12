import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRopaComponent } from './ropas/formulario-ropa/formulario-ropa.component';
import { RopasComponent } from './ropas/ropas.component';
import { ComentariosRopaComponent } from './ropas/comentarios-ropa/comentarios-ropa.component';
import { HomeComponent } from './home/home.component';
import { ComentarioRopaComponent } from './ropas/comentarios-ropa/comentario-ropa/comentario-ropa.component';



//Aca van a ir las rutas de la aplicación
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ropas', component: RopasComponent},
  {path: 'ropas/agregar', component: FormularioRopaComponent},
  {path: 'preciosRopa', component: FormularioRopaComponent},
  {path: 'preciosRopa/:importe', component: FormularioRopaComponent},
  {path: 'ropas/:id', component: FormularioRopaComponent},
  {path: 'comentariosropa/:id', component: ComentariosRopaComponent},
  {path: 'verComentarios/:id', component: ComentarioRopaComponent},
  {path: 'ropasSearch/:texto_busqueda', component: RopasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
