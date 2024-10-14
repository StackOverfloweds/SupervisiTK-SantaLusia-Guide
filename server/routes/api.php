<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\RPH\RPHUploadController;
use App\Http\Controllers\User\getUser;
use App\Http\Controllers\User\userController;
use Illuminate\Support\Facades\Route;


Route::middleware(['cors'])->group(function () {

    
    Route::prefix('Auth')->group(function () {
        // Registration Route (no middleware)
        Route::post('/register', [RegisterController::class, 'register']);
        
        // Login Route with middleware to check token
        Route::post('/login', action: [LoginController::class, 'login']);
        
        // Logout Route with middleware to check token
        Route::delete('/logout', [LogoutController::class, 'logout']);
    });

    // RPH routes with the prefix 'rph'
    Route::prefix('rph')->group(function () {
        // Route to store the file upload (for RPH or Video Pembelajaran)
        Route::post('/upload', [RPHUploadController::class, 'store']);
        Route::get('/files', [RPHUploadController::class, 'getAllFiles']);
        Route::get('/download/{userId}/{fileName}/{fileType}', [RPHUploadController::class, 'downloadFile']);

    });

    //get User
    Route::prefix('users')->group(function () {
        Route::get('/prof-user', [getUser::class, 'index']); // Change 'getAllUser' to 'index'

        // Store a new user
        Route::post('/store', [UserController::class, 'store']);

        // Update an existing user
        Route::put('/update/{userId}', [UserController::class, 'update']);

        // Delete a user
        Route::delete('/delete/{userId}', [UserController::class, 'destroy']);
    });
    
    
});