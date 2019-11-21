import { Component, OnInit } from '@angular/core'
import {NgForm} from '@angular/forms'
import { BackendService } from '../../servicios/backend.service'
import { Usuariomodel } from '../../modelos/usuario.module'
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  public usuario : Usuariomodel
  public seleccionado : string
  public resultcorreo : Usuariomodel[]
  public resultcedula : Usuariomodel[]
  public grabar : boolean

  constructor(private backend: BackendService,  private router: Router) {}

  ngOnInit() {
    this.usuario =this.backend.Nuevousuario()
  }

  onSubmit(f: NgForm)
  {
    this.backend.GuardarUsuario(this.usuario).subscribe(() =>
    {
      if (this.backend.resultado.text() == "ya existe el correo")
      {
        alert("Hay un usuario con este correo, revisar.")
      }
      else
        if (this.backend.resultado.text() == "ya existe la cedula")
        {
          alert("Hay un usuario con esta cedula, revisar.")
        }
        else
          if (this.backend.resultado.text() == "")
          {
            alert("Usuario ingresado")
            this.router.navigate(['listado']);
          }
          else
            {
              alert("Ocurrio un error al ingresar el error")              
            }
    })
  }
}
