<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\profile_user;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
class RegisterController extends Controller
{
    /**
     * Create user
     * @param Request $request
     * 
     */
    public function Register (Request $request)
    {
        Log::info("Check input : ",$request->all());
        //validate data
        $request->validate([
            'name' => 'required|string|max:255',
            'password' => 'required|string|min:6',
            'role' => 'required|in:wali_murid,guru,kepala_sekolah',
            'email' => 'required|string|email|max:255', 
            'phone_number' => 'required|string|max:15', 
            'second_phone_number' => 'nullable|string|max:15', 
            'address' => 'nullable|string|max:255', 
        ]);   
        
        //check if name its already in db
        $checkName = $this->checkUsername($request->name);

        if ($checkName == true) 
        {
            return response()->json(['error' => 'Username already taken'], 400);
        }

        try {
            // Begin database transaction
            DB::beginTransaction();
            $user = User::create([
                'name' => $request->name,
                'password' =>  Hash::make($request->password),
                'role' => $request->role,
            ]);

             // Create profile
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

        return response()->json([
            'error' => 'Registration failed',
            'message' => $th->getMessage()
        ], 500);
    }

    }

    /**
     * Cek apakah username sudah digunakan oleh pengguna lain.
     *
     * @param string $username Username yang akan dicek
     * @return bool True jika username sudah ada, false jika belum
     */
    private function checkUsername ($username)
    {
        //check user if its in db
        $user = User::where('name',$username)->first();
        return $user ? true : false;
    }
}