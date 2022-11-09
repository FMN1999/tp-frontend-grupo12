import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRopaComponent } from './ropas/formulario-ropa/formulario-ropa.component';
import { RopasComponent } from './ropas/ropas.component';
import { ComentariosRopaComponent } from './ropas/comentarios-ropa/comentarios-ropa.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { ComentarioRopaComponent } from './ropas/comentarios-ropa/comentario-ropa/comentario-ropa.component';
=======
>>>>>>> 7ee2a49e53124bba6b30b0dd9c05ac0a953bbbd3



//Aca van a ir las rutas de la aplicación
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ropas', component: RopasComponent},
  {path: 'ropas/agregar', component: FormularioRopaComponent},
  {path: 'ropas/:id', component: FormularioRopaComponent},
  {path: 'comentariosropa/:id', component: ComentariosRopaComponent},
<<<<<<< HEAD
  {path: 'verComentarios/:id', component: ComentarioRopaComponent},
=======
  {path: 'verComentarios/:id', component: ComentariosRopaComponent},
>>>>>>> 7ee2a49e53124bba6b30b0dd9c05ac0a953bbbd3
  {path: 'ropasSearch/:texto_busqueda', component: RopasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
