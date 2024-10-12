<?php

namespace App\Http\Controllers\RPH;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log; // For logging errors
use App\Models\RPHUploads;
use Exception;
use Yaza\LaravelGoogleDriveStorage\Gdrive;
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
            'file' => 'required|file|mimes:pdf,mp4|max:61440', // Restrict file types and size
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

            // Determine folder name based on file type
            $folderName = $fileType === 'RPH' ? 'RPH_Files' : 'Video_Pembelajaran_Files';

            // Check if the folder exists; if not, create it
            $folderExists = Storage::disk('google')->exists($folderName);
            if (!$folderExists) {
                Storage::disk('google')->makeDirectory($folderName);
                Log::info("Folder created: " . $folderName);
            } else {
                Log::info("Folder already exists: " . $folderName);
            }

            // Upload the file into the specific folder
            $filePath = Storage::disk('google')->putFileAs($folderName, $file, $fileName);

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

    public function getAllFiles(Request $request)
{
    try {
        // Get the path for the root or a specific folder
        $path = ''; // Specify the path if needed, e.g., 'RPH_Files' or 'Video_Pembelajaran_Files'
        $recursive = true; // Change to false if you do not want to include subfolders

        // Retrieve all files from Google Drive
        $files = Gdrive::all($path, $recursive);

        // Check if files collection is empty
        if ($files->isEmpty()) {
            return response()->json(['message' => 'No files found.']);
        }
        Log::info("chekking files " .json_encode($files));

        // Map files to include useful metadata
        $fileData = $files->map(function ($file) {
            return [
                'name' => $file['path'], // Assuming 'path' gives you the unique identifier for the file
            ];
        });

        return response()->json(['files' => $fileData],200);
    } catch (\Exception $e) {
        Log::error('Error retrieving files from Google Drive: ' . $e->getMessage());
        return response()->json(['message' => 'Error retrieving files.'], 500);
    }
}




    
}