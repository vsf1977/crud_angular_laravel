import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgForm} from '@angular/forms'
import { BackendService } from '../../servicios/backend.service'
import { Usuariomodel } from '../../modelos/usuario.module'
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrado',
  templateUrl: './borrado.component.html',
  styleUrls: ['./borrado.component.css']
})
export class BorradoComponent implements OnInit {

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

  datos(e)
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
    let resp =  confirm("Desea Borrar los datos del siguiente ususario :\nCedula: " + this.usuario.cedula + "\nNombre completo: " + this.usuario.nombre + " " + this.usuario.apellidos + "\nCorreo: " + this.usuario.correo + "\nTelefono: " + this.usuario.telefono)
    if (resp)
    {
      this.backend.BorrarUsuario(this.usuario).subscribe(() =>
      {
        console.log(this.backend.resultado)
        alert("Usuario borrado")
        this.router.navigate(['listado']);
      })
    }
  }

}
