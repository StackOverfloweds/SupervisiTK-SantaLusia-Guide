<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcements extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'content', 'created_by',
    ];

     /**
     * Relationship to User model (Admin who made the announcement).
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by', 'user_id');
    }
}