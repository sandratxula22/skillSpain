<?php

namespace App\Http\Controllers;


use App\Models\Usuario;

use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function index()
    {
        return Usuario::with('pueblo')->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nombre' => 'required|string|max:100',
            'apellidos' => 'required|string|max:200',
            'rol' => 'required|in:Administrador,Alcalde,Ciudadano',
            'pueblo_id' => 'nullable|exists:pueblos,id',
        ]);
        return Usuario::create($data);
    }

    public function show($id)
    {
        return Usuario::with('pueblo')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'nombre' => 'string|max:100',
            'apellidos' => 'string|max:200',
            'rol' => 'in:Administrador,Alcalde,Ciudadano',
            'pueblo_id' => 'nullable|exists:pueblos,id',
        ]);
        $usuario = Usuario::findOrFail($id);
        $usuario->update($data);
        return $usuario;
    }

    public function destroy($id)
    {
        Usuario::findOrFail($id)->delete();
        return response(null, 204);
    }
}