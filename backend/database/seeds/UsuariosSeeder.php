<?php

use Illuminate\Database\Seeder;
use \App\Usuarios;

class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Usuarios::create(['nombre'=>'Vladimir',
            'apellidos'=>'Silva Fuentes',
            'cedula'=>'123456789',
            'correo'=>'vsf1977@gmail.com',
            'telefono'=>'3012454745']);
    }
}
