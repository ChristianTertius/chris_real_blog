<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'name',
        'type',
        'year',
        'achievement',
        'link_github',
        'link_website',
        'techs',
    ];
    protected $casts = [
        'techs' => 'array',
    ];
}
