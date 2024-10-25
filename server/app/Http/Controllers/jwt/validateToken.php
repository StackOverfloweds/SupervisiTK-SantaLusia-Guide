<?php

namespace App\Http\Controllers\jwt;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Models\User;

class validateToken extends Controller
{
    /**
     * Validate a JWT token and return the associated user
     *
     * @param string $token
     * @return \Illuminate\Http\JsonResponse
     */
    public function validateToken($token)
    {
        try {
            // Parse the token and check if it's valid
            $user = JWTAuth::setToken($token)->authenticate();

            if (!$user) {
                return response()->json(['error' => 'User not found'], 404);
            }

            // If token is valid, return the user data
            return response()->json([
                'user' => $user,
                'token_valid' => true
            ], 200);

        } catch (JWTException $e) {
            // Handle JWT exception
            return response()->json(['error' => 'Invalid token'], 401);
        }
    }
}