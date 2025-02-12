<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Baile extends Model
{
    use HasFactory;

    protected $fillable = ['tipo', 'configuracion_geometrica', 'pueblo_id'];

    public function pueblo()
    {
        return $this->belongsTo(Pueblo::class);
    }

    public function inscripciones()
    {
        return $this->hasMany(Inscripcione::class);
    }
}