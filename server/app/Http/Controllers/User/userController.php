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
     * Update an existing user.
     *
     * @param \Illuminate\Http\Request $request
     * @param string $userId
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $userId)
    {
        // Find the user
        $user = User::where('user_id', $userId)->first();
        Log::info("check user: ".$user);
        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }

        // Validate the incoming request with same rules as `store`
        $request->validate([
            'name' => 'sometimes|required|string|max:255', // Exclude current user's name
            'password' => 'sometimes|required|string|min:6', // Allow password update
            'role' => 'sometimes|required|in:guru',
            'email' => 'sometimes|required|string|email|max:255', // Exclude current user'
            'phone_number' => 'sometimes|required|string|max:15',
            'second_phone_number' => 'nullable|string|max:15',
            'address' => 'nullable|string|max:255',
        ]);

        try {
            // Begin transaction
            DB::beginTransaction();

            Log::info("Updating user: ", $request->all());

            // Update the user details (name, role, and password if provided)
            $user->update([
                'name' => $request->get('name', $user->name),
                'role' => $request->get('role', $user->role),
                'password' => $request->has('password') ? Hash::make($request->password) : $user->password,
            ]);

            // Update the user profile
            $profileUser = profile_user::where('user_id', $user->user_id)->first();
            if ($profileUser) {
                $profileUser->update([
                    'email' => $request->get('email', $profileUser->email),
                    'phone_number' => $request->get('phone_number', $profileUser->phone_number),
                    'second_phone_number' => $request->get('second_phone_number', $profileUser->second_phone_number),
                    'address' => $request->get('address', $profileUser->address),
                ]);
            }

            // Commit the transaction
            DB::commit();

            // Return success response
            return response()->json([
                'message' => 'User updated successfully',
                'user' => $user,
                'profile' => $profileUser,
            ], 200);

        } catch (\Throwable $th) {
            // Rollback the transaction in case of error
            DB::rollBack();
            Log::error('Update failed: ' . $th->getMessage());
            return response()->json([
                'error' => 'Update failed',
            ], 500);
        }
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