<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Chris',
            'email' => 'christian160103@gmail.com',
            'password' => Hash::make('jjj'),
            'fullname' => 'Christian Carlos Tertius',
            'current_role' => 'Developer',
            'current_location' => 'West Jakarta, Indonesia',
            'description' => 'Hi, I’m Christian! I build things for the web and love exploring how technology can make life and work more efficient. Every day, I challenge myself to learn something new—whether it’s backend development, system design, or improving the way I manage and understand complex systems. I also enjoy creating content in my free time, sharing moments, thoughts, and things I’m passionate about.',
            'lovetodo' => 'Music, Badminton, Playing Guitar, Web and Mobile Development',
        ]);
    }
}
