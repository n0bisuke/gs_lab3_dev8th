<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostsController extends Controller
{
    public function posts() {
        $posts = Post::latest()->get();
        // dd($posts->toArray());
        return view('posts')->with('posts', $posts);
    }
    public function index()
    {
        return view('chat/chat');
    }
}
