<?php

namespace App\Http\Controllers;


use App\Models\Evento;

use Illuminate\Http\Request;

class EventoController extends Controller
{
    public function index()
    {
        return Evento::with('pueblo')->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nombre' => 'required|string|max:100',
            'fecha' => 'required|date',
            'hora' => 'required',
            'precio' => 'required|numeric',
            'pueblo_id' => 'required|exists:pueblos,id',
        ]);
        return Evento::create($data);
    }

    public function show($id)
    {
        return Evento::with('pueblo')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'nombre' => 'string|max:100',
            'fecha' => 'date',
            'hora' => 'string',
            'precio' => 'numeric',
            'pueblo_id' => 'exists:pueblos,id',
        ]);
        $evento = Evento::findOrFail($id);
        $evento->update($data);
        return $evento;
    }

    public function destroy($id)
    {
        Evento::findOrFail($id)->delete();
        return response(null, 204);
    }
}
