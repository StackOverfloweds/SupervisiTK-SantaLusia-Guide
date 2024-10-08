<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supervisions extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'form_data',
    ];

    /**
     * Relation to model user
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}