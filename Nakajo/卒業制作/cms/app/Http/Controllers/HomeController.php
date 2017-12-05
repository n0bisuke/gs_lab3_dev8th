<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
        $this->middleware('auth', ['except' => ['p_friends', 't_masaki']]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home/home');
    }
    
    public function edit()
    {
        return view('home/edit');
    }
    
    public function register()
    {
        return view('home/register');
    }
    
    //サンプル1
    public function p_friends()
    {
        return view('home/ProjectFriends');
    }
    //サンプル2
    public function t_masaki()
    {
        return view('home/TakeuchiMasaki');
    }
    
}
