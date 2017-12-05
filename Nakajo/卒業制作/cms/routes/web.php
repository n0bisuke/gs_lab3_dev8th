<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use App\Book;
use Illuminate\Http\Request; 

/**
* ダッシュボード表示 */
Route::get('/', 'BooksController@index');

/**
* 新「本」を追加 */
Route::post('/books', 'BooksController@store');

/**
* 本を削除 */
Route::post('/book/delete/{book}', function (Book $book) {
    $book->delete();
    return redirect('/');
});

//更新画面
Route::post('/booksedit/{books}', 'BooksController@edit');

//更新処理
Route::post('/books/update', 'BooksController@update');

//scaffold
Route::resource("tasks","TaskController"); // Add this line in routes.php


/*********************/
// A-0 ログイン機能
// Auth/LoginController.php
/*********************/
Auth::routes();
//Auth::get('/login', 'LoginController@__construct');

/*********************/
// B-0 登録退会機能
// RegistController.php
/*********************/
//Route::post('/register', 'HomeController@register');


/*********************/
// C-0 自己紹介機能
// WhoAmIController.php
/*********************/
//Route::get('/home', 'HomeController@index'); ←HomeController.phpに集約

/*********************/
// D-0 コミュニティ機能
// PostsController.php
/*********************/
Route::get('/chat', 'PostsController@index');

/*********************/
// E-0 Vision売買機能
// VisionDealController.php
/*********************/
Route::get('/connect/buy', 'VisionDealController@buy');

Route::get('/connect/sell', 'VisionDealController@sell');

Route::get('/connect/confirm', 'VisionDealController@confirm');

/*********************/
// F-0 チャージ機能
// ChargeController.php
/*********************/
//Route::post('/Charge/charge', 'HomeController@t_masaki');

/*********************/
// G-0 推薦者募集機能
// RecommendsController.php
/*********************/

/*********************/
// H-0 ホーム画面
// HomeController.php
/*********************/
Route::get('/home', 'HomeController@index');

Route::get('/home/register', 'HomeController@register');

Route::get('/home/edit', 'HomeController@edit');

//サンプル1
Route::get('/home/ProjectFriends', 'HomeController@p_friends');
//サンプル2
Route::get('/home/TakeuchiMasaki', 'HomeController@t_masaki');

/*********************/
// I-0 設定画面
// settingController.php
/*********************/
//設定画面
Route::get('/setting', 'SettingController@index');

//履歴画面
Route::get('/history', 'SettingController@history');

// Z-0 外部連携機能
// OuteriteRelationController.php

// ZZ-0 その他

// P-0 投稿画面

//投稿処理のコントローラー
Route::get('/post', 'PostsController@post');
