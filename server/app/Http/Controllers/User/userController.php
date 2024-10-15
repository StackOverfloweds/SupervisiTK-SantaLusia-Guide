<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\profile_user; // Ensure this is the correct model for user profiles
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class userController extends Controller
{
     /**
     * Store a new user.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        Log::info("Registering new user: ", $request->all());

        // Validate the incoming request
        $request->validate([
            'name' => 'required|string|max:255|unique:users,name', // Ensure the username is unique
            'password' => 'required|string|min:6',
            'role' => 'required|in:wali_murid,guru,kepala_sekolah',
            'email' => 'required|string|email|max:255|unique:profile_users,email', // Ensure the email is unique
            'phone_number' => 'required|string|max:15',
            'second_phone_number' => 'nullable|string|max:15',
            'address' => 'nullable|string|max:255',
        ]);

        try {
            // Begin database transaction
            DB::beginTransaction();

            // Create the user
            $user = User::create([
                'name' => $request->name,
                'password' => Hash::make($request->password),
                'role' => $request->role,
                'user_id' => Str::uuid(), // Generate UUID if not already handled in User model
            ]);

            // Create the user profile
            $profileUser = profile_user::create([
                'user_id' => $user->user_id, // Link the user via UUID
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'second_phone_number' => $request->second_phone_number,
                'address' => $request->address,
            ]);

            // Commit the transaction
            DB::commit();

            // Return success response
            return response()->json([
                'message' => 'User registered successfully',
                'user' => $user,
                'profile' => $profileUser,
            ], 201);

        } catch (\Throwable $th) {
            // Rollback the transaction if something goes wrong
            DB::rollBack();
            Log::error('Registration failed: ' . $th->getMessage());
            return response()->json([
                'error' => 'Registration failed',
            ], 500);
        }
    }

    /**
     * Update an existing user.
     *
     * @param \Illuminate\Http\Request $request
     * @param string $userId
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $userId)
    {
        // Validate the incoming request
        $request->validate([
            'name' => 'sometimes|required|string|max:255|unique:users,name,',
            'role' => 'sometimes|required|string|in:wali_murid,guru,kepala_sekolah',
        ]);
        Log::info("check valiate : ".json_encode($request->all()));

        // Find the user
        $user = User::where('user_id', $userId)->first();
        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }

        // Update the user and profile details
        $user->update($request->only('name', 'role')); // Update only name and role
        $profileUser = profile_user::where('user_id', $user->user_id)->first();
        if ($profileUser) {
            $profileUser->update($request->only('email', 'phone_number', 'second_phone_number', 'address'));
        }

        return response()->json(['message' => 'User updated successfully', 'user' => $user, 'profile' => $profileUser], 200);
    }

    /**
     * Delete a user.
     *
     * @param string $userId
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($userId)
    {
        // Find the user
        $user = User::find($userId);
        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }

        // Delete the user
        $user->delete();
        // Also delete the associated profile
        profile_user::where('user_id', $user->user_id)->delete();

        return response()->json(['message' => 'User deleted successfully.'], 200);
    }
}