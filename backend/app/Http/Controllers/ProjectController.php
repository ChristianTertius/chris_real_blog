<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::orderBy('year', 'desc')->get();
        return ProjectResource::collection($projects);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // validation
        $validated = $request->validate([
            'name' => 'required|string',
            'type' => 'required|string',
            'year' => 'required|integer',
            'achievement' => 'required|string',
            'link_github' => 'required|string',
            'link_website' => 'required|string',
            'techs' => 'required|array',
        ]);

        $project = Project::create($validated);

        return response()->json($project);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return ProjectResource::make($project);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'type' => 'required|string',
            'year' => 'required|integer',
            'achievement' => 'required|string',
            'link_github' => 'required|string',
            'link_website' => 'required|string',
            'techs' => 'required|array',
        ]);
        $project->update($validated);
        return ProjectResource::make($project);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();
        return response()->noContent();
    }
}
