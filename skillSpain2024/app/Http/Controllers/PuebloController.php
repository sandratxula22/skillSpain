<?php

namespace App\Http\Controllers;
use App\Models\Pueblo;

use Illuminate\Http\Request;

class PuebloController extends Controller
{
    public function index()
    {
        return Pueblo::with('provincia')->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nombre' => 'required|string|max:100',
            'provincia_id' => 'required|exists:provincias,id',
            'num_vecinos_censados' => 'required|integer',
            'num_personas_fiestas' => 'required|integer',
            'num_personas_verano' => 'required|integer',
        ]);
        return Pueblo::create($data);
    }

    public function show($id)
    {
        return Pueblo::with(['provincia', 'usuarios', 'eventos', 'bailes', 'noticias'])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'nombre' => 'string|max:100',
            'provincia_id' => 'exists:provincias,id',
            'num_vecinos_censados' => 'integer',
            'num_personas_fiestas' => 'integer',
            'num_personas_verano' => 'integer',
        ]);
        $pueblo = Pueblo::findOrFail($id);
        $pueblo->update($data);
        return $pueblo;
    }

    public function destroy($id)
    {
        Pueblo::findOrFail($id)->delete();
        return response(null, 204);
    }
}