<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
use Tymon\JWTAuth\Exceptions\JWTException;

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

        try {
        if (!$token = JWTAuth::attempt(credentials: $credential)) 
        {
            return response()->json(['error' =>'invalid credential Or Wrong username and Password'],401);
        }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not create token'], 500);
        }
        // Get user information for the response
        $user = Auth::user();

        return $this->respondWithToken($token,$user);
    }

    /**
     * Respond with the generated token and user information
     *
     * @param string $token
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, User $user)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'user' => [
                'name' => $user->name,
                'role' => $user->role,
            ]
        ]);
    }


}