<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VisionDealController extends Controller
{
    public function __construct(){
        $this->middleware('auth', ['except' => ['buy', 'sell', 'confirm']]);
        //$this->middleware('auth');
    }
    // 購入
    public function buy()
    {
        return view('connect/buy');
    }
    public function confirm()
    {
        return view('connect/confirm');
    }
    // 売却
    public function sell()
    {
        return view('connect/sell');
    }
    // public function confirm_sell()
    // {
    //     return view('connect/confirm_sell');
    // }
}
