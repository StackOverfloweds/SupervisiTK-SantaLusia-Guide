<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class CheckJWTToken
{
     /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Check if the request has a token
        $token = JWTAuth::getToken();  

        if ($token) {
            try {
                // Check if the token is valid
                if (JWTAuth::setToken($token)->check()) {
                    // If valid, return an error response
                    return response()->json(['error' => 'User already logged in.'], 401);
                }
            } catch (JWTException $e) {
                // Handle invalid token case (optional)
                return response()->json(['error' => 'Invalid token.'], 401);
            }
        }

        return $next($request); // Proceed to the next middleware or controller
    }
}