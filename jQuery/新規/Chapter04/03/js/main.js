$(function(){

    var duration = 300;

    $('#buttons2 button').each(function(index) {
      var pos = index * 40 - 40;
      $(this).css('top', pos);
    })
    // $('#buttons2 button')に対しての連続処理
    .on('mouseover', function() {
      var $btn = $(this).stop(true).animate({
        backgroundColor: '#faee00',
        color: '#000'
      }, duration);
      $btn.find('img:first-child').stop(true).animate({
        opacity: 0
      }, duration);
      $btn.find('img:nth-child(2)').stop(true).animate({
        opacity: 1
      }, duration);
    })

    .on('mouseout', function() {
      var $btn = $(this).stop(true).animate({
        backgroundColor: 'fff',
        color: '#01b169',
      }, duration);
      // $(this).find('img:first-child').stop(true).animate({ でも良い？
      $btn.find('img:first-child').stop(true).animate({
        opacity: 1
      }, duration);
      $btn.find('img:nth-child(2)').stop(true).animate({
        opacity: 0
      }, duration)
    });



});
