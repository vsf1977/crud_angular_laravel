import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UsuarioModule { }

export interface Usuariomodel {
  nombre: string
  apellidos : string
  cedula : string
  telefono : string
  correo : string
}
