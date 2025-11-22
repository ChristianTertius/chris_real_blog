<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::orderBy('name', 'desc')->get();
        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     */
    //
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string',
            'password' => 'required|string',
            'fullname' => 'required|string',
            'current_role' => 'required|string',
            'current_location' => 'required|string',
            'description' => 'required|string',
            'lovetodo' => 'required|string',
        ]);

        $user = User::create($validated);

        return UserResource::make($user)
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return UserResource::make($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string',
            'password' => 'required|string',
            'fullname' => 'required|string',
            'current_role' => 'required|string',
            'current_location' => 'required|string',
            'description' => 'required|string',
            'lovetodo' => 'required|string',
        ]);
        $user->update($validated);
        return UserResource::make($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->noContent();
    }
}
