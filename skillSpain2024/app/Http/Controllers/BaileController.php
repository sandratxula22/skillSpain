<?php

namespace App\Http\Controllers;

use App\Models\Baile;

use Illuminate\Http\Request;

class BaileController extends Controller
{
    public function index()
    {
        return Baile::with('pueblo')->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'tipo' => 'required|in:Individual,Pareja,Grupo',
            'configuracion_geometrica' => 'required|in:Fila,Circunferencia,Rombo,Cuadrado',
            'pueblo_id' => 'required|exists:pueblos,id',
        ]);
        return Baile::create($data);
    }

    public function show($id)
    {
        return Baile::with('pueblo')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'tipo' => 'in:Individual,Pareja,Grupo',
            'configuracion_geometrica' => 'in:Fila,Circunferencia,Rombo,Cuadrado',
            'pueblo_id' => 'exists:pueblos,id',
        ]);
        $baile = Baile::findOrFail($id);
        $baile->update($data);
        return $baile;
    }

    public function destroy($id)
    {
        Baile::findOrFail($id)->delete();
        return response(null, 204);
    }
}
