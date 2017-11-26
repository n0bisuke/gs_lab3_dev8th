<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'NJ10') }}</title>


    <link rel="shortcut icon" href="favicon.ico" type="img/icon/favicon.ico"/>

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/colorbox.css">
    <link rel="stylesheet" href="/css/range.css">
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/style.css">

    <!-- Scripts -->
    <!-- カウントダウン -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script>
    var $311 = $.noConflict(true);
  </script>
  
  <!-- ビットコインの価格 -->
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script>
$(function() {
  // ［検索］ボタンクリックで郵便番号検索を実行
  window.onload = function() {
    $.getJSON('https://api.cryptonator.com/api/ticker/btc-jpy',{})
    .done(function(data) {
      if (data.ticker) {
        // 結果を取得後、中身が空でなければ、その値を反映
        var result = data.ticker.price;
        var _pow = Math.pow( 10 , 3 ) ;
        result =  Math.round( result * _pow ) / _pow ;
        $('#btc').text('1 Bitcoin: '+result+'円');
      } else {
        // 中身が空の場合は、エラーメッセージを反映
        $('#btc').text('1 Bitcoin: Error.');
      }
    });

    $.getJSON('https://api.cryptonator.com/api/ticker/xmr-jpy',{})
    .done(function(data) {
      if (data.ticker) {
        // 結果を取得後、中身が空でなければ、その値を反映
        var result = data.ticker.price;
        var _pow = Math.pow( 10 , 3 ) ;
        result =  Math.round( result * _pow ) / _pow ;
        $('#xmr').text('1 Monero: '+result+'円');
      } else {
        // 中身が空の場合は、エラーメッセージを反映
        $('#xmr').text('1 Monero: Error.');
      }
    });
  };
});
</script>
 
 
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
    
    
    
    
    
    
    
    
    
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-default navbar-static-top">
        
            <div class="container">
                
    <!--<header>-->
    <!--<div class="header_top">-->
    <!--<div class="header_left">-->
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a class="navbar-brand" href="{{ url('/') }}">
                         <img src="img/structure/logo.png" class="logo">
                         <!--{{ config('app.name', 'NJ10') }}-->
                    </a>
                </div>
                
      <!--</div>-->
                

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        
                        
                    
                        
                    
                    <!-- Authentication Links -->
                        @if (Auth::guest())
                            <li><a href="{{ url('/login') }}">ログイン</a></li>
                            <li><a href="{{ url('/register') }}">登録</a></li>
                        @else
                            <li class="dropdown">
                              
                          <!--<p id="btc">1 Bitcoin: 取得中</p>-->
                          <!--<p id="xmr">1 Monero: 取得中</p> -->
                        
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <ul class="dropdown-menu" role="menu">
                                   <!-- 
                                    <li id="btc">
                                        1 Bitcoinの価格: 取得中
                                    </li> 
                                    <li id="xmr">
                                        1 Moneroの価格: 取得中
                                    <li>
                                    -->
                                    
                                    <!-- ホーム画面 -->
                                    <li>
                                        <a href="{{ url('/home') }}">
                                            ホーム
                                        </a>
                                    </li>
                                    
                                    <!-- 設定画面 -->
                                    <li>
                                        <a href="{{ url('/setting') }}">
                                            設定
                                        </a>
                                    </li>
                                    
                                    
                                    <!-- ログアウト -->
                                    <li>
                                        <a href="{{ url('/logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            ログアウト
                                        </a>

                                        <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                                    
                                </ul>
                            </li>
                        @endif
                    
              		 <!--   <li>-->
                 <!--       <a href="http://fb.me/" target="_blank">-->
                          <!-- target="_blank"を使用することで、SNS系は新しいウィンドウで表示 -->
              			<!--	  <img src="img/icon/fb.png">-->
              			<!--    </a>-->
                 <!--       </li>-->
              			<!--<li>-->
                 <!--           <a href="http://twitter.com/" target="_blank">-->
              			<!--	    <img src="img/icon/twitter.png">-->
              			<!--	</a>-->
                 <!--       </li>-->
  			
                        
                        
                        
                    </ul>
                </div>
                
    <!--</div>-->
    <!--</header>-->
            </div>
            
    
    
    
    
    
        </nav>
        @yield('content')
    </div>
    

    <!-- Scripts -->
    <script src="/js/app.js"></script>
</body>
</html>
