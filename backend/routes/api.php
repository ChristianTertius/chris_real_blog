<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BioController;
use App\Http\Controllers\WorkController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// public routes
Route::post("/login", [AuthController::class, "login"])->name("login");


Route::apiResource("bios", BioController::class)->only(["index", "show"]);;
Route::apiResource("works", WorkController::class)->only(["index", "show"]);;
Route::apiResource("projects", ProjectController::class)->only(["index", "show"]);;
Route::apiResource("blogs", BlogController::class)->only(["index", "show"]);;

// protected routes
Route::middleware("auth:sanctum")->group(function () {
    Route::post("/logout", [AuthController::class, "logout"])->name("logout");
    Route::get("/me", [AuthController::class, "me"])->name("me");

    Route::apiResource("users", UserController::class);

    Route::apiResource("bios", BioController::class)->except(["index", "show"]);;
    Route::apiResource("works", WorkController::class)->except(["index", "show"]);;
    Route::apiResource("projects", ProjectController::class)->except(["index", "show"]);;
    Route::apiResource("blogs", BlogController::class)->except(["index", "show"]);;
});
