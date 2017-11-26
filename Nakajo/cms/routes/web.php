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
* 本のダッシュボード表示 */
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

Auth::routes();

Route::get('/home', 'HomeController@index');


//投稿処理のコントローラー
Route::get('/post', 'PostsController@post');
