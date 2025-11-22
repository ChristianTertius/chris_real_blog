<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    protected $fillable = [
        'role',
        'place',
        'description',
        'techs',
    ];

    protected $casts = [
        'techs' => 'array',
    ];
}
