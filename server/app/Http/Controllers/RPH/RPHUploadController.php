<?php

namespace App\Http\Controllers\RPH;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log; // For logging errors
use App\Models\RPHUploads;
use Exception;

class RPHUploadController extends Controller
{
    /**
     * Store the uploaded file and manage Google Drive.
     */
    public function store(Request $request)
    {
        // Validate incoming request
        $request->validate([
            'user_id' => 'required|uuid|exists:users,user_id', // Validate that user_id is a valid UUID and exists in users table
            'file' => 'required|file|mimes:pdf,mp4|max:20480', // Restrict file types and size
            'file_type' => 'required|in:RPH,Video Pembelajaran',
            'description' => 'required|string|max:256', // Validate the description field
        ]);

        // Log the request data for debugging
        Log::info("Incoming request", ['request' => $request->all()]);

        try {
            // Get the validated inputs
            $userId = $request->input('user_id');
            $fileType = $request->input('file_type');
            $description = $request->input('description');
            $file = $request->file('file');
            
            // Create a unique file name
            $fileName = time() . '-' . $file->getClientOriginalName();

            // Interact with Google Drive to upload the file
            $filePath = Storage::disk('google')->putFileAs('', $file, $fileName);

            // Save the metadata and file path in the database
            $rphUpload = new RPHUploads();
            $rphUpload->user_id = $userId;
            $rphUpload->file_type = $fileType;
            $rphUpload->description = $description; // Save the description
            $rphUpload->file_path = $filePath; // Save the file path on Google Drive
            $rphUpload->save();

            // Return a success response with the Google Drive file path
            return response()->json(['message' => 'File uploaded successfully', 'file_path' => $filePath]);

        } catch (Exception $e) {
            // Log the error
            Log::error('Error in RPHUploadController@store: ' . $e->getMessage(), [
                'user_id' => $userId ?? null,
                'file_type' => $fileType ?? null,
                'description' => $description ?? null,
                'exception' => $e
            ]);

            // Return a response with error
            return response()->json(['message' => 'An error occurred while uploading the file. Please try again.'], 500);
        }
    }
}