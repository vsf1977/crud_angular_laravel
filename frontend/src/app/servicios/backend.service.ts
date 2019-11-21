import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,URLSearchParams  } from '@angular/http';
import { Usuariomodel } from '../modelos/usuario.module';
import 'rxjs/Rx';



@Injectable()
export class BackendService {

  public usuarios  : Usuariomodel[]
  public resultcorreo  : Usuariomodel[]
  public resultcedula  : Usuariomodel[]
  public resultado : Response

  constructor(private http : Http) { }

  listado()
  {
    //let encabezado = new Headers({'Access-Control-Allow-Origin': '*' });
    return this.http.get('http://localhost:8000/lista')
      .map((response:Response) => this.usuarios = response.json())
  }

  Nuevousuario(): any {
    return {
      nombre : '',
      apellidos: '',
      cedula: '',
      correo: '',
      telefono: ''
    }
  }

  GuardarUsuario(usuario: Usuariomodel)
  {
    return this.http.post('http://localhost:8000/guardar', usuario)
    .map((response:Response) => this.resultado = response)
  }

  EditarUsuario(usuario: Usuariomodel)
  {
    return this.http.put('http://localhost:8000/editar', usuario)
    .map((response:Response) => this.resultado = response)
  }

  BorrarUsuario(usuario: Usuariomodel)
  {
    return this.http.delete('http://localhost:8000/borrar', {body: usuario})
    .map((response:Response) => this.resultado = response)
  }

}
