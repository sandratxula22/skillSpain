<?php

namespace App\Http\Controllers;

use App\Models\Noticia;
use Illuminate\Http\Request;

class NoticiaController extends Controller
{
    public function index()
    {
        return Noticia::with('pueblo')->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'tipo' => 'required|in:Urgente,Aviso,Información,Evento',
            'titulo' => 'required|string|max:200',
            'contenido' => 'required|string',
            'fecha_creacion' => 'required|date',
            'pueblo_id' => 'required|exists:pueblos,id',
        ]);
        return Noticia::create($data);
    }

    public function show($id)
    {
        return Noticia::with('pueblo')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'tipo' => 'in:Urgente,Aviso,Información,Evento',
            'titulo' => 'string|max:200',
            'contenido' => 'string',
            'fecha_creacion' => 'date',
            'pueblo_id' => 'exists:pueblos,id',
        ]);
        $noticia = Noticia::findOrFail($id);
        $noticia->update($data);
        return $noticia;
    }

    public function destroy($id)
    {
        Noticia::findOrFail($id)->delete();
        return response(null, 204);
    }
}