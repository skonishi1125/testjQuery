$(function(){
    // 
    var duration = 300;

    // images ----------------------------------------
    // jQueryオブジェクトを格納する 格納していることがわかりやすいように$をつける
    var $images = $('#images p');

    // images 1つ目の画像
    // filter:jQueryオブジェクトの要素から、さらに絞り込むメソッド findとの違いはP113
    // 
    // id="images"の中のpの、1番目の要素にマウスが乗った時、乗った要素のstrongとspanに処理をする
    // 

    // $('#images p:nth-child(1)')でも動作した
    $images.filter(':nth-child(1)')
      .on('mouseover', function() {
        $(this).find('strong, span').stop(true).animate({
          // strong = 文字 span = 古い感じの色
          opacity: 1
        }, duration)
      })
      .on('mouseout', function() {
        $(this).find('strong, span').stop(true).animate({
          opacity: 0
        }, duration);
      });

    // images 2つ目の画像
    // $('#images p:nth-child(2)')でもOK
    $images.filter(':nth-child(2)')
      .on('mouseover', function() {
        $(this).find('strong').stop(true).animate({
          opacity: 1,
          left: '0%'
        }, duration);
        $(this).find('span').stop(true).animate({
          opacity: 1
        }, duration);
      })
      .on('mouseout', function() {
        $(this).find('strong').stop(true).animate({
          opacity: 0,
          left: '-200%'
        }, duration);
        $(this).find('span').stop(true).animate({
          opacity: 0
        }, duration);
      });

    // images 3つ目の画像
    $images.filter(':nth-child(3)')
      .on('mouseover', function() {
        $(this).find('strong').stop(true).animate({
          bottom: '0px',
          // opacity: 0.3
        }, duration);
        $(this).find('span').stop(true).animate({
          opacity: 1
        }, duration);
        $(this).find('img').stop(true).animate({
          top: '-20px'
        }, duration * 1.3);
      })
      .on('mouseout', function() {
        $(this).find('strong').stop(true).animate({
          bottom: '-80px'
        }, duration);
        $(this).find('span').stop(true).animate({
          opacity: 0
        }, duration);
        $(this).find('img').stop(true).animate( {
          top: '0px'
        }, duration);
      });


});
