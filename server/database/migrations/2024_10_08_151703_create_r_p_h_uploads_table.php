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
        Schema::create('r_p_h_uploads', function (Blueprint $table) {
            $table->id();
            $table->uuid('user_id');
            $table->enum('file_type', ['RPH', 'Video_Pembelajaran']); // Tipe file
            $table->string('file_path'); // Lokasi file yang diunggah
            $table->string('description');
            $table->timestamps();

            $table->foreign('user_id')
                ->references('user_id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('r_p_h_uploads');
    }
};