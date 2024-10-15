<?php

namespace App\Http\Controllers\Announcement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Announcements;
class AnnouncementController extends Controller
{
    /**
     * created announcement
     * @param Request $request
     * 
     */
    public function store (Request $request)
    {
        $request->validate([
            'content' => 'required|string|min:10',
        ]);

        // save the file
        $announcement = new Announcements();
        $announcement->content = $request->input('content');

        $announcement->save();
        
        return response()->json([
            'message' => 'Announcement created successfully',
            'announcement' => $announcement,
        ], 201); // 201 Created status
    }

    /**
     * getAll announcement
     * 
     */
    public function getDataAnnouncement ()
    {
        $getData = Announcements::all();

        return response()->json(['data' => $getData]);
    }
}   