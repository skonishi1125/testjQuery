$(function(){

  $('#typo .inner')
    .css('top', '-100px')
    .on('click', function() {
      $('#typo .inner').animate({
        top: '100px'
        },
        1500,
        // アニメーション終了時に行う処理
        // この場合、-100px -> 100px -> 0 に戻る
        function() {
          $('#typo .inner').animate({top: '0px'}, 500);
        }
      );
    });

    $('#typo')
      .on('mouseover',function() {
        $('#typo').stop(true).animate({
            // 2回インデントしておく
            backgroundColor: '#ae5e9b'
          },
          500
        );
      })
      .on('mouseout',function() {
        $('#typo').stop(true).animate({
          // 2回インデントしておく
          backgroundColor: '#3498db'
        },
        500
      );
    });


});

