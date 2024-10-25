<?php

namespace App\Http\Controllers\RPH;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log; // For logging errors
use App\Models\RPHUploads;
use App\Models\User;
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
        'file_type' => 'required|in:RPH,Video', // Updated to match your new values
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
        $fileName = time() . '-' . preg_replace('/\s+/', '_', $file->getClientOriginalName()); // Replace spaces with underscores

        // Determine folder name based on file type
        $folderName = $fileType === 'RPH' ? 'RPH_Files' : 'Video_Files';

        // Check if the folder exists; if not, create it
        if (!Storage::disk('google')->exists($folderName)) {
            Storage::disk('google')->makeDirectory($folderName);
            Log::info("Folder created: " . $folderName);
        } else {
            Log::info("Folder already exists: " . $folderName);
        }

        // Upload the file into the specific folder
        $filePath = Storage::disk('google')->putFileAs($folderName, $file, $fileName);

        // Save the metadata and file path in the database
        RPHUploads::create([
            'user_id' => $userId,
            'file_type' => $fileType,
            'description' => $description,
            'file_path' => $filePath,
        ]);

        // Return a success response with the Google Drive file path
        return response()->json(['message' => 'File uploaded successfully', 'file_path' => $filePath], 201);

    } catch (Exception $e) {
        // Log the error
        Log::error('Error in RPHUploadController@store: ' . $e->getMessage(), [
            'user_id' => $userId ?? null,
            'file_type' => $fileType ?? null,
            'description' => $description ?? null,
            'exception' => $e,
        ]);

        // Return a response with error
        return response()->json(['message' => 'An error occurred while uploading the file. Please try again.'], 500);
    }
}


    public function getAllFiles(Request $request)
{
    try {
        // Get all RPH uploads from the database with user information, filtering by role
        $uploads = RPHUploads::with('user') // Load the user relationship
            ->whereHas('user', function($query) {
                $query->where('role', 'guru'); // Filter to only include users with the role of "guru"
            })
            ->select('user_id', 'file_type', 'description', 'file_path')
            ->get();

        // Check if uploads collection is empty
        if ($uploads->isEmpty()) {
            return response()->json(['message' => 'No files found for users with role "guru".']);
        }

        // Map uploads to include useful metadata along with the Google Drive file path
        $fileData = $uploads->map(function ($upload) {
            return [
                'user_id' => $upload->user_id,
                'user_name' => $upload->user->name ?? 'Unknown', // Safely access the user's name
                'role' => $upload->user->role, // Get the user's role
                'file_type' => $upload->file_type,
                'description' => $upload->description,
                'file_path' => $upload->file_path, // This is the path stored in the database
                'name' => basename($upload->file_path), // Get the file name from the path
            ];
        });

        return response()->json(['files' => $fileData], 200);
    } catch (\Exception $e) {
        Log::error('Error retrieving files from database: ' . $e->getMessage());
        return response()->json(['message' => 'Error retrieving files.'], 500);
    }
}


    /**
     * Download a file from Google Drive.
     */

     public function downloadFile($userId, $fileName, $file_type)
{
    try {
        // Check if the user exists and has the right to download the file
        $user = User::find($userId);
        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }

        // Determine folder name based on file type
        $folderName = $file_type === 'RPH' ? 'RPH_Files' : 'Video_Files';
        $filePath = $folderName . '/' . $fileName;

        // Check if the folder and file exist
        if (!Storage::disk('google')->exists($filePath)) {
            return response()->json(['message' => 'File not found.'], 404);
        }

        // Get the file's content from Google Drive
        $fileContent = Storage::disk('google')->get($filePath);

        // Log file path and content length for debugging
        Log::info("File path: " . $filePath);
        Log::info("File content length: " . strlen($fileContent));

        // Guess MIME type manually based on the file extension
        $extension = pathinfo($fileName, PATHINFO_EXTENSION);
        $mimeType = $this->getMimeType($extension);

        // Download the file with proper headers
        return response($fileContent, 200)
            ->header('Content-Type', $mimeType)
            ->header('Content-Disposition', 'attachment; filename="' . basename($fileName) . '"');

    } catch (Exception $e) {
        Log::error('Error downloading file from Google Drive: ' . $e->getMessage());
        return response()->json(['message' => 'Error downloading file.'], 500);
    }
}

    

    /**
     * Manually determine the MIME type based on the file extension.
     */
    private function getMimeType($extension)
    {
        $mimeTypes = [
            'pdf' => 'application/pdf',
            'mp4' => 'video/mp4',
            'jpeg' => 'image/jpeg',
            'jpg' => 'image/jpeg',
            'png' => 'image/png',
            'doc' => 'application/msword',
            'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            // Add more types as needed
        ];

        return $mimeTypes[strtolower($extension)] ?? 'application/octet-stream'; // Default to binary stream
    }
        



    
}