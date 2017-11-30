<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;
use Validator;
use Auth;

class SettingController.php extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }    
    
    public function setting(Request $request){
        //$books = Book::orderBy('created_at', 'asc')->paginate(3);
        $books = Book::where('user_id', Auth::user()->id)->orderBy('created_at', 'desc')->paginate(5);
        return view('setting',["books"=>$books]);
    }
}
