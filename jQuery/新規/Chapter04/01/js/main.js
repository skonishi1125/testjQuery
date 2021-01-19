$(function(){
  console.log('otameshi');
  
  // アニメーションにかける時間
  var duration = 300;

  // 1行目のボタン

  // id="button1"の1~4番目のbutton要素に対して処理
  $('#buttons1 button:nth-child(-n+4)')
    .on('mouseover', function() {
      $(this).stop(true).animate({
        backgroundColor: '#ae5e9b',
        color:  '#fff',
      }, duration);
    })
    .on('mouseout', function() {
      $(this).stop(true).animate({
        backgroundColor: '#fff',
        color: '#ebc000',
      }, duration);
    });

    // 2行目のボタン
    
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
      .on('mouseover', function() {
        $(this).stop(true).animate({
          borderWidth: '12px',
          color: '#ae5e0c',
        }, duration, 'easeOutSine');
      })
      .on('mouseout', function() {
        $(this).stop(true).animate( {
          borderWidth: '0px',
          color:  "#ebc000",
        }, duration, 'easeOutSine',)
      });

      // 3行目
      // 9番目以降のbutton要素に処理をする
      $('#buttons1 button:nth-child(n+9)')
      // mouseenter:マウスポインタの出入りを監視するアクションメソッド
        .on('mouseenter', function() {
          // find('絞り込むセレクタ') #buttons1のthisの中から更に'> span'となっている要素が対象
          // class="bg"ってなってる方対象？ <span class="bg"「><span」>　「」部分を表すのかも
          $(this).find('> span').stop(true).animate({
            width: '100%'
          }, duration, 'easeOutQuad');
          })
        .on('mouseleave', function() {
          $(this).find('> span').stop(true).animate({
            width: '0%'
          }, duration, 'easeOutQuad');
        });

});
