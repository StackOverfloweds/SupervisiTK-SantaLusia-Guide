<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class getUser extends Controller
{

    /**
     * Get all users including their IDs.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Fetch all users
        $users = User::where('role', 'guru')->get();

        // Return a JSON response
        return response()->json($users);
    }
}