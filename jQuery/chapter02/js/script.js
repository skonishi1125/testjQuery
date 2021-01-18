$(function(){
  // CSSを変更する
  $('#typo').css('color', 'red');

  $('#typo').css('transform','rotate(10deg)');

  // 古い書き方にも対応（覚えなくて良い）
  $('.page-main > div:nth-child(1) .inner').css('opacity',0.5);

  // 複数指定 {}で括られたものをオブジェクトと呼ぶ
  $('#typo').css({
    backgroundColor:'yellow',
    fontSize:'16px',
  })

  // $('#typo').on('mouseover',function() {
  $('#typo').on('click',function() {
    // $('#typo').css('color','black');
    $('#typo').css('background-color', '#ae5e9b');
    $('header').css('color', '#ae5e9b');
  });

  // メソッドチェーンで以下のコメント文を書く
  // $('#typo2').on('mouseover', function(){
  //   $('#typo2').css({
  //     color: '#ebc000',
  //     backgroundColor: '#ae5e9b',
  //   })
  // });

  // $('#typo2').on('mouseout', function(){
  //   $('#typo2').css({
  //     color: '',
  //     backgroundColor: '',
  //   })
    
  // });

  $('#typo2')
    .on('mouseover', function() {
      $('#typo2').css({
        color: '#ebc000',
        backgroundColor: '#ae5e9b',
      });
    })
    .on('mouseout', function() {
      $('#typo2').css({
        color: '',
        backgroundColor: '',
      });
    });



    // アニメーション実装
    $('#typo3').on('click', function() {
      $('#typo3 .inner3').animate({
          // opacity: 0,
          color: '#ebc000',
          fontSize: '30px',
        },
        1500
      );
    });
    

    $('#typo4 .inner4')
      .css('top', '-100px')
      .on('click', function() {
        $('#typo4 .inner4').animate({
          top: '100px'
        },
        1500,
        'linear'
        );
      });








});