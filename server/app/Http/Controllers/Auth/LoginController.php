<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
class LoginController extends Controller
{
    /**
     * Handle user login and return JWT token
     * 
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function Login (Request $request)
    {
        //validate input
        $request->validate([
            'name' => 'required|string|max:255',
            'password' => 'required|string|min:6',
        ]);

        $credential = $request->only('name','password');
        if (!$token = Auth::attempt($credential)) 
        {
            return response()->json(['error' =>'invalid credential'],401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Respond with the generated token and user information
     *
     * @param string $token
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'user' => Auth::user() // Mengembalikan data pengguna
        ]);
    }


}