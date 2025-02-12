<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Noticia extends Model
{
    use HasFactory;

    protected $fillable = ['tipo', 'titulo', 'contenido', 'fecha_creacion', 'pueblo_id'];

    public function pueblo()
    {
        return $this->belongsTo(Pueblo::class);
    }
}