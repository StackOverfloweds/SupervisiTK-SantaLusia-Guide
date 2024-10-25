<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('r_p_h_uploads')
            ->where('file_type', 'Video Pembelajaran')
            ->update(['file_type' => 'Video_Pembelajaran']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('r_p_h_uploads')
            ->where('file_type', 'Video_Pembelajaran')
            ->update(['file_type' => 'Video Pembelajaran']);
    }
};