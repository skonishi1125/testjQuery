'use strict';

{
	const text = document.querySelector('textarea');

	// text.addEventListener('focus', () => {
	// 	console.log('focus');
	// })

	// text.addEventListener('blur', () => { //フォーカスが外れたときの動作
	// 	console.log('blur');
	// })

	text.addEventListener('input', () => {
		//console.log('input');
		//inputされた値を表示できる
		console.log(`現在の文字数： ${text.value.length}`);
	})

	text.addEventListener('change', () => { //値の変更が確定したときに呼び出される
		console.log('change');
	})


}




{
	// document.querySelector('form').addEventListener('submit', () => {
	// 	console.log('submitされました'); 
		//コンソールに表示された後、ページ遷移が発生し、リロードが起こる

	// });

	//ページ遷移をキャンセルしよう
	document.querySelector('form').addEventListener('submit', e => {
		e.preventDefault(); //規定の動作をキャンセルすることができる
		console.log('submitされました！');
	});

}

//イベントの伝搬 #21
{
	document.querySelector('ul').addEventListener('click',e => {
		//ul(親クラス)に設定した場合
		//ul : e.currentTarget クリックされた要素:targetで取得することができる

		//クリックされた要素の名前が「li」だったら
		if (e.target.nodeName === 'LI') {
			//要素にdoneクラスを追加する
			e.target.classList.toggle('done');
		}
	});




}












