<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pueblo extends Model
{
    use HasFactory;

    protected $fillable = ['nombre', 'provincia_id', 'num_vecinos_censados', 'num_personas_fiestas', 'num_personas_verano', 'alcalde_id'];

    public function provincia()
    {
        return $this->belongsTo(Provincia::class);
    }

    public function usuarios()
    {
        return $this->hasMany(Usuario::class);
    }

    public function eventos()
    {
        return $this->hasMany(Evento::class);
    }

    public function bailes()
    {
        return $this->hasMany(Baile::class);
    }

    public function noticias()
    {
        return $this->hasMany(Noticia::class);
    }
    public function alcalde()
    {
        return $this->belongsTo(Usuario::class, 'alcalde_id');
    }
}