$(function(){

  $('#message').css({
    fontSize: '16px',
    backgroundColor: 'gray',
  });

  // 変数にはCSSなどのオブジェクトを格納し、受け渡せる
  var arg = {
    'font-size': '50px',
    'background-color': 'pink',
    'color': '#ebc000',
  };

  $('#message').on('click',function(){
    $('#message').css(arg);
  });

  // P75 オブジェクト内のデータを取得する
  var obj = {
    a: 100,
    b: 300,
  }

  console.log(obj.b);

  // 配列
  var arr = [10,20,30];
  console.log(arr[0]);


  // this
  // 下記の場合、on()メソッドに指定してあるイベントが発生した要素が格納される(=>typo)
  $('.thisTest').on('mouseover', function() {
    $(this).css('color','white');
  });


});