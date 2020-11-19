import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { ModificarComponent } from './components/modificar/modificar.component';


const routes: Routes = [
  {path : "" , component : DepartamentosComponent},
  {path:"insertar" , component:InsertarComponent},
  {path:"eliminar/:id" , component:DepartamentosComponent},
  {path:"update/:id" , component:ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
