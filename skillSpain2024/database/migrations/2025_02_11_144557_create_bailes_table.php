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
        Schema::create('bailes', function (Blueprint $table) {
            $table->id();
            $table->enum('tipo', ['Individual', 'Pareja', 'Grupo']);
            $table->enum('configuracion_geometrica', ['Fila', 'Circunferencia', 'Rombo', 'Cuadrado']);
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
        Schema::dropIfExists('bailes');
    }
};
