<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class profile_user extends Model
{
    use HasFactory;

    protected $table = 'profile_user';

    protected $primaryKey="profile_id";
    public $incrementing=false;
    protected $keyType = "string";
    // fillable
   protected $fillable = [
        'profile_id',
        'user_id',
        'email',
        'phone_number',
        'second_phone_number',
        'address'
    ];

    // relationship

    public function user() {
        return $this->belongsTo(User::class,'user_id');
    }

    // create boot method

    protected static function boot() {
        parent::boot();

        //generate UUID for profile_id

        static::creating(function($model){
            $model->profile_id=(string) str::uuid();
        });
    }
}