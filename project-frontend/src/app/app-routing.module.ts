import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRopaComponent } from './ropas/formulario-ropa/formulario-ropa.component';
import { RopasComponent } from './ropas/ropas.component';



//Aca van a ir las rutas de la aplicación
const routes: Routes = [
  {path: '', component: RopasComponent},
  {path: 'ropas', component: RopasComponent}, 
  {path: 'ropas/agregar', component: FormularioRopaComponent},
  {path: 'ropas/editar/:id', component: FormularioRopaComponent}, 
  {path: 'ropas/borrar/:id', component: FormularioRopaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
