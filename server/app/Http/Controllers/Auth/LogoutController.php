<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    /**
     * Logout and invalidate the token
     *
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        // Retrieve the token from the request, either as a parameter or from the Authorization header
        $token = JWTAuth::getToken();
        Log::info('Check token: ' . $token);

        // Check if the token is provided
        if (empty($token)) {
            return response()->json(['error' => 'Token not provided.'], 401);
        }

        Log::info("User attempting to log out with token: " . $token);

        try {
            // Invalidate the token
            JWTAuth::invalidate($token);
            return response()->json(['message' => 'Successfully logged out'], 200);
        } catch (JWTException $e) {
            Log::error('Logout failed: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to logout, token cannot be invalidated'], 500);
        }
    }
}