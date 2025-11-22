<?php

namespace App\Http\Controllers;

use App\Http\Resources\BioResource;
use App\Models\Bio;
use Illuminate\Http\Request;

class BioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bios = Bio::orderBy('year', 'desc')->get();
        return BioResource::collection($bios);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // validation
        $validated = $request->validate([
            'year' => 'required|integer',
            'description' => 'required|string',
        ]);

        $bio = Bio::create($validated);

        return BioResource::make($bio)
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Bio $bio)
    {
        return BioResource::make($bio);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bio $bio)
    {
        $validated = $request->validate([
            'year' => 'required|integer',
            'description' => 'required|string',
        ]);
        $bio->update($validated);
        return BioResource::make($bio);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bio $bio)
    {
        $bio->delete();
        return response()->noContent();
    }
}
