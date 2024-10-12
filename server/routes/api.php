<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\RPH\RPHUploadController;
use Illuminate\Support\Facades\Route;


Route::middleware(['cors'])->group(function () {

    
    Route::prefix('Auth')->group(function () {
        // Registration Route (no middleware)
        Route::post('/register', [RegisterController::class, 'register']);
        
        // Login Route with middleware to check token
        Route::post('/login', action: [LoginController::class, 'login'])->middleware('token');;
        
        // Logout Route with middleware to check token
        Route::delete('/logout', [LogoutController::class, 'logout']);
    });

    
});

// Route to store the file upload (for RPH or Video Pembelajaran)
Route::post('/rph-upload', [RPHUploadController::class, 'store']);