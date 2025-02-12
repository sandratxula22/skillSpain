<?php

namespace App\Http\Controllers;


use App\Models\Inscripcione;
use Illuminate\Http\Request;

class InscripcionController extends Controller
{
    public function index()
    {
        return Inscripcione::with(['usuario', 'evento', 'baile'])->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'usuario_id' => 'required|exists:usuarios,id',
            'tipo_inscripcion' => 'required|in:Evento,Baile',
            'referencia_id' => 'required|integer',
            'fecha_alta' => 'required|date',
            'fecha_baja' => 'nullable|date',
        ]);
        return Inscripcione::create($data);
    }

    public function show($id)
    {
        return Inscripcione::with(['usuario', 'evento', 'baile'])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'usuario_id' => 'exists:usuarios,id',
            'tipo_inscripcion' => 'in:Evento,Baile',
            'referencia_id' => 'integer',
            'fecha_alta' => 'date',
            'fecha_baja' => 'nullable|date',
        ]);
        $inscripcion = Inscripcione::findOrFail($id);
        $inscripcion->update($data);
        return $inscripcion;
    }

    public function destroy($id)
    {
        Inscripcione::findOrFail($id)->delete();
        return response(null, 204);
    }
}
