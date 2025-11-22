<?php

namespace App\Http\Controllers;

use App\Http\Resources\WorkResource;
use App\Models\Work;
use Illuminate\Http\Request;

class WorkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $works = Work::orderBy('role', 'desc')->get();
        return WorkResource::collection($works);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // validation
        $validated = $request->validate([
            'role' => 'required|string',
            'place' => 'required|string',
            'description' => 'required|string',
            'techs' => 'required|array',
        ]);

        $work = Work::create($validated);

        return WorkResource::make($work)
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Work $work)
    {
        return WorkResource::make($work);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Work $work)
    {
        $validated = $request->validate([
            'role' => 'required|string',
            'place' => 'required|string',
            'description' => 'required|string',
            'techs' => 'required|array',
        ]);
        $work->update($validated);
        return WorkResource::make($work);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Work $work)
    {
        $work->delete();
        return response()->noContent();
    }
}
