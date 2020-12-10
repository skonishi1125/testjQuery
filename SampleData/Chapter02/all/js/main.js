$(function() {
	//----------step2------------
	$('#typo .inner').css('transform', 'rotate(10deg)');
	$('.page-header').css('background-color', 'pink');

	$('.page-main > div:nth-child(1) .inner').css('opacity',0.5);
	$('h1').css('color','yellow');

	$('footer').css({
		fontSize: '30px',
		color: '#ebc000',
		backgroundColor: 'skyblue'
	})
	//クォーテーションを省略できる。ハイフンを取り除き、続く単語の最初一文字を大文字にする

	/* 複数のプロパティを適用する
	$('#typo').css({
		'font-size' : '50px',
		'background-color' : 'ae5e9b',
		'color' : '#ecb000'
	});
	*/

	//$('#typo').css('color'); と値を指定せずに記述すると、現在適用中の値を取得できる

	//----------step3------------

	$('#typo').on('mouseover', function(){
		$('#typo').css('color', '#ebc000');
		$('#typo').css('background-color', '#ae5e9b');
	});

	$('#typo').on('mouseout', function(){
		$('#typo').css({
			//空の列を指定するとcssの初期値に戻る
			color: '',
			backgroundColor: ''
		})
	});


	//メソッドチェーン $('セレクタ').メソッド1().メソッド2().メソッド3(). ....
	$('#typo')
		.on('mouseover', function(){
			$('#typo').css({
				//処理
			});
		//.onに対してはセミコロンが不要
		})
		.on('mouseout', function(){
			$('#typo').css({
				//処理
			});
		})
		.on('click', function(){
			$('#typo').animate({
					opacity: 0,
					fontSize: '0px'
				},
				1500
			);
		})

});