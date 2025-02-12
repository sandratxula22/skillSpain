<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $fillable = ['nombre', 'apellidos', 'rol', 'pueblo_id'];

    public function pueblo()
    {
        return $this->belongsTo(Pueblo::class);
    }

    public function inscripciones()
    {
        return $this->hasMany(Inscripcione::class);
    }
}
