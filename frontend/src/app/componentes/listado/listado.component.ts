import { Component, OnInit } from '@angular/core';
import { Usuariomodel } from '../../modelos/usuario.module'
import { BackendService } from '../../servicios/backend.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  public usuarios : Usuariomodel[]

  constructor(private backend : BackendService)
  {
    this.backend.listado().subscribe(() =>
    {
      this.usuarios = this.backend.usuarios
    })
  }

}
