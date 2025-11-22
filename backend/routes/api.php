<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BioController;
use App\Http\Controllers\WorkController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// public routes
Route::post("/login", [AuthController::class, "login"])->name("login");

// protected routes
Route::middleware("auth:sanctum")->group(function () {
    Route::post("/logout", [AuthController::class, "logout"])->name("logout");
    Route::get("/me", [AuthController::class, "me"])->name("me");

    Route::apiResource("users", UserController::class);
    Route::apiResource("bios", BioController::class);
    Route::apiResource("works", WorkController::class);
    Route::apiResource("projects", ProjectController::class);
    Route::apiResource("blogs", BlogController::class);
});
