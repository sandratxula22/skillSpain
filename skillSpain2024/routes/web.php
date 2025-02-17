<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Http\Controllers\ProvinciaController;
use App\Http\Controllers\PuebloController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\EventoController;
use App\Http\Controllers\BaileController;
use App\Http\Controllers\InscripcionController;
use App\Http\Controllers\NoticiaController;

Route::apiResource('provincias', ProvinciaController::class);
Route::apiResource('pueblos', PuebloController::class);
Route::apiResource('usuarios', UsuarioController::class);
Route::apiResource('eventos', EventoController::class);
Route::apiResource('bailes', BaileController::class);
Route::apiResource('inscripciones', InscripcionController::class);
Route::apiResource('noticias', NoticiaController::class);

Route::get('/csrf-token', function () {
    return response()->json(['csrfToken' => csrf_token()]);
});
