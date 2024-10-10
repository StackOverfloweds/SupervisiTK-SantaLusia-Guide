<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Allow requests from localhost:3000
        if ($request->headers->has('Origin')) {
            $origin = $request->headers->get('Origin');

            // Check if the origin matches the allowed origin
            if ($origin === 'http://localhost:3000') {
                // Set CORS headers
                return $next($request)
                    ->header('Access-Control-Allow-Origin', $origin)
                    ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                    ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
                    ->header('Access-Control-Allow-Credentials', 'true'); 
            }
        }

        // Proceed to the next middleware or request if the origin is not allowed
        return $next($request);
    }
}