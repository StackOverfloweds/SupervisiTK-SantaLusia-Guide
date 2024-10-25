<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('r_p_h_uploads', function (Blueprint $table) {
            // Change the file_type column from enum to string
            $table->string('file_type')->change();
        });

        // Update existing data to change enum value
        DB::table('r_p_h_uploads')
            ->where('file_type', 'Video_Pembelajaran')
            ->update(['file_type' => 'Video']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('r_p_h_uploads', function (Blueprint $table) {
            // Change the file_type column back to enum
            $table->enum('file_type', ['RPH', 'Video_Pembelajaran'])->change();
        });

        // Revert the changes made to existing data
        DB::table('r_p_h_uploads')
            ->where('file_type', 'Video')
            ->update(['file_type' => 'Video_Pembelajaran']);
    }
};