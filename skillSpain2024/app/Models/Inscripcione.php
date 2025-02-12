<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscripcione extends Model
{
    use HasFactory;

    protected $fillable = ['usuario_id', 'tipo_inscripcion', 'referencia_id', 'fecha_alta', 'fecha_baja'];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }

    public function evento()
    {
        return $this->belongsTo(Evento::class, 'referencia_id');
    }

    public function baile()
    {
        return $this->belongsTo(Baile::class, 'referencia_id');
    }
}