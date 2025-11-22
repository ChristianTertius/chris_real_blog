<?php

use App\Http\Controllers\BioController;
use App\Http\Controllers\WorkController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\BlogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource("bios", BioController::class);
Route::apiResource("works", WorkController::class);
Route::apiResource("projects", ProjectController::class);
Route::apiResource("blogs", BlogController::class);
