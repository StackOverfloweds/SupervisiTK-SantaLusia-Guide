<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RPHUploads extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'file_type', 'file_path',
    ];

    /**
     * Relation to model user
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}