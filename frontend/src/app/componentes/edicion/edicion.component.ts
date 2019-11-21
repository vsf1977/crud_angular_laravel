import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgForm} from '@angular/forms'
import { BackendService } from '../../servicios/backend.service'
import { Usuariomodel } from '../../modelos/usuario.module'
import { Router } from '@angular/router';


@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  public usuarios : Usuariomodel[]
  public usuario : Usuariomodel
  public usuarioactivo : string


  constructor(private backend: BackendService,  private router: Router) {}

  ngOnInit() {
    this.usuario =this.backend.Nuevousuario()
    this.backend.listado().subscribe(() =>
    {
      this.usuarios = this.backend.usuarios
      this.usuario = this.usuarios[0]
    })
  }

  llenarforma(e)
  {
    for(var i=0; i<this.usuarios.length;i++)
    {
      if (e.target.value == this.usuarios[i].cedula)
      {
        this.usuario = this.usuarios[i]
      }
    }
  }

  onSubmit(f: NgForm)
  {
    this.backend.EditarUsuario(this.usuario).subscribe(() =>
    {
      console.log(this.backend.resultado)
      if (this.backend.resultado.text() == "ya existe el correo")
      {

        alert("Hay un usuario con este correo, revisar.")
      }
      else
        if (this.backend.resultado.text() == "")
        {
          alert("Usuario actualizado")
          this.router.navigate(['listado']);
        }
        else
          {
            alert("Ocurrio un error al actualizar el usuario")
          }
    })
  }



}
