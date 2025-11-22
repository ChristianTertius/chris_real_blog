<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'fullname' => $this->fullname,
            'current_role' => $this->current_role,
            'current_location' => $this->current_location,
            'description' => $this->description,
            'lovetodo' => $this->lovetodo,
            'password' => $this->password,
        ];
    }
}
