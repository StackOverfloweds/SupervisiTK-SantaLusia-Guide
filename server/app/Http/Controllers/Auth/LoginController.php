<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Helpers\JWTHelper;
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

        // check if name its not in db and password is wrong
        // Retrieve the user by name
        $user = User::where('name', $request->name)->first();

        // Check if the user exists and if the password is correct
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        
        try {
            // Generate JWT token for the logged in user
            $jwt = new JWTHelper();
            $token = $jwt->generateLoginJWT($user->user_id);

            return response()->json([
                'token' => $token,
                'token_type' => 'bearer',
                'user' => $user,
            ], 200);
        
        } catch (JWTException $e) {
             // Return a response in case of an error
             return response()->json(['error' => 'Could not create token'], 500);
        }
        
    }




}