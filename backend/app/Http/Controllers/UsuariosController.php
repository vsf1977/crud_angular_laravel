<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Usuarios;
use Illuminate\Support\Facades\DB;

class Usercontroller extends Controller
{
       public function lista()
    {
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
        return response()->json(Usuarios::all());
    }

    public function guardar()
    {
        $correo =  request()->correo;
        $cedula =  request()->cedula;
        $checkcorreo = Usuarios::where('correo', '=', $correo)->get();
        $checkcedula = Usuarios::where('cedula', '=', $cedula)->get();
        if (count($checkcorreo))
        {
            return response("ya existe el correo");
        }
        else
        {
            if (count($checkcedula))
            {
                return response("ya existe la cedula");
            }
            else
            {
                $Usuario = new Usuarios;
                $Usuario->nombre = request()->nombre;
                $Usuario->apellidos = request()->apellidos;
                $Usuario->cedula = request()->cedula;
                $Usuario->correo = request()->correo;
                $Usuario->telefono = request()->telefono;
                $Usuario->save();
            }
        }
    }

    public function editar()
    {
        $correo =  request()->correo;
        $cedula =  request()->cedula;
        $checkcorreo = Usuarios::where('correo', '=', $correo)->first();
        if ($checkcorreo != null)
        {
            $cedula = $checkcorreo->cedula;
            if ($cedula != request()->cedula)
            {
                return response("ya existe el correo");
            }
        }
        $cedula =  request()->cedula;
        $data =  request()->all();
        $Usuario = Usuarios::where('cedula', '=', $cedula)->first();
        $Usuario->nombre = request()->nombre;
        $Usuario->apellidos = request()->apellidos;
        $Usuario->correo = request()->correo;
        $Usuario->telefono = request()->telefono;
        $Usuario->save();
    }

    public function borrar()
    {
        $cedula =  request()->cedula;
        $Usuario = Usuarios::where('cedula', '=', $cedula)->delete();
    }

}
