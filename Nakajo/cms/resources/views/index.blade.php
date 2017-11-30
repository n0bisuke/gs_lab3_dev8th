<!-- resources/views/books.blade.php -->

@extends('layouts.app')

@section('content')
    
    
    <div class="panel-body">
        <!-- バリデーションエラーの表示に使用-->
        @include('common.errors')
        <!-- バリデーションエラーの表示に使用-->
        
        <!-- ログイン時のみ、呟く機能が追加 -->
        <?php if (Auth::check())  { ?>
        <form method="post">
          <div>
            <input
              type="hidden"
              name="name"
              value=""
              size="56"
              class="hitokoto"
              >
          </div>
          <div>
            ひとこと: <textarea
              name="message"
              cols="50"
              rows="5"
              padding-top="2"
              wrap="hard"
              value=""
              ></textarea>
            <input type="hidden" name="category_id" value="0">
            <input type="submit" value="呟く。">
            <input type="hidden" name="mode" value="insert_hitokoto">
          </div>
      </form>
        <?php } ?>
        
        
        
        
        
         <!-- 現在 本 -->
         @if (count($books) > 0)
            <div class="panel panel-default">
                <div class="panel-heading"> 
                    優待
                </div>
                <div class="panel-body">
                <table class="table table-striped task-table">
                    <!-- テーブルヘッダ -->
                    <thead>
                        <th>Myリターン一覧</th>
                        <th>&nbsp;</th>
                    </thead>
                    <!-- テーブル本体 -->
                    <tbody>
                         @forelse ($books as $book)
                            <tr>
                                <!-- 本タイトル -->
                                <td class="table-text">
                                    <div>{{ $book->item_name }}</div>
                                    <div>数量:{{ $book->item_number }}</div>
                                    <div>金額:{{ $book->item_amount }}</div>
                                    <div>{{ $book->published }}</div>
                                </td>
                                
                                <!-- 本：更新ボタン -->
                                <td>
                                    <form action="{{ url('booksedit/'.$book->id) }}" method="POST">
                                        {{ csrf_field() }}
                                        <button type="submit" class="btn btn-primary">
                                        <i class="glyphicon glyphicon-pencil"></i> 更新 </button>
                                    </form>
                                </td>
                                
                                <!-- 本: 削除ボタン -->
                                <td>
                                    <form action="{{ url('book/delete/'.$book->id) }}" method="POST">
                                        
                                        {{ csrf_field() }}

                                        <button type="submit" class="btn btn-danger"> <i class="glyphicon glyphicon-trash"></i> 
                                            削除
                                        </button>
                                    </form>
                                </td>
                                
                            </tr>
                        @empty
                        <tr>
                            <td>
                                No posts yet
                            </td>
                        <tr>
                         @endforelse
                         
                    </tbody>
                </table>
            </div>
            
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                   {{ $books->links()}}
                 </div>
            </div>
            
        </div>
    @endif
    <!--  ook: 既に登録されてる本 リスト -->
   
    </div>
@endsection