<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('inscripciones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('usuario_id');
            $table->enum('tipo_inscripcion', ['Evento', 'Baile']);
            $table->unsignedBigInteger('eventos_id')->nullable();
            $table -> foreign("eventos_id") -> references("id")->on("eventos")->onDelete("set null");
            $table->unsignedBigInteger('bailes_id')->nullable();
            $table -> foreign("bailes_id") -> references("id")->on("bailes")->onDelete("set null");
            $table->date('fecha_alta');
            $table->date('fecha_baja')->nullable();
            $table->foreign('usuario_id')->references('id')->on('usuarios');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inscripciones');
    }
};
