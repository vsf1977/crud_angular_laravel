import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './componentes/listado/listado.component';
import { NuevoComponent } from './componentes/nuevo/nuevo.component';
import { EdicionComponent } from './componentes/edicion/edicion.component';
import { BorradoComponent } from './componentes/borrado/borrado.component';


const routes: Routes = [
  {path : 'listado', component: ListadoComponent },
  {path : 'nuevo', component: NuevoComponent },
  {path : 'edicion', component: EdicionComponent },
  {path : 'borrado', component: BorradoComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'listado' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
