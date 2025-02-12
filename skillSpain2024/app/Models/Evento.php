<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    use HasFactory;

    protected $fillable = ['nombre', 'fecha', 'hora', 'precio', 'pueblo_id'];

    public function pueblo()
    {
        return $this->belongsTo(Pueblo::class);
    }

    public function inscripciones()
    {
        return $this->hasMany(Inscripcion::class);
    }
}