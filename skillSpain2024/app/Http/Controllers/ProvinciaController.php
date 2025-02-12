<?php

namespace App\Http\Controllers;

use App\Models\Provincia;
use Illuminate\Http\Request;

class ProvinciaController extends Controller
{
    public function index()
    {
        return Provincia::with('pueblos')->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate(['nombre' => 'required|string|max:100']);
        return Provincia::create($data);
    }

    public function show($id)
    {
        return Provincia::with('pueblos')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate(['nombre' => 'string|max:100']);
        $provincia = Provincia::findOrFail($id);
        $provincia->update($data);
        return $provincia;
    }

    public function destroy($id)
    {
        Provincia::findOrFail($id)->delete();
        return response(null, 204);
    }
}