import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './servicios/backend.service';
import { ListadoComponent } from './componentes/listado/listado.component';
import { NuevoComponent } from './componentes/nuevo/nuevo.component';
import { EdicionComponent } from './componentes/edicion/edicion.component';
import { BarraSuperiorComponent } from './componentes/barra-superior/barra-superior.component';
import { BorradoComponent } from './componentes/borrado/borrado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    NuevoComponent,
    EdicionComponent,
    BarraSuperiorComponent,
    BorradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
