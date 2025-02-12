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
        Schema::create('noticias', function (Blueprint $table) {
            $table->id();
            $table->enum('tipo', ['Urgente', 'Aviso', 'Información', 'Evento']);
            $table->string('titulo', 200);
            $table->text('contenido');
            $table->date('fecha_creacion');
            $table->unsignedBigInteger('pueblo_id');
            $table->foreign('pueblo_id')->references('id')->on('pueblos');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('noticias');
    }
};
