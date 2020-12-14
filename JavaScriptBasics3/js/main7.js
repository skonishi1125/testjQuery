'use strict';

//input要素を操作

{
	document.querySelector('button').addEventListener('click', () => {
		//要素の生成 createElement
		const li = document.createElement('li');

		//inputで入れられた値
		const text = document.querySelector('input');
		//入力されたものはvalue属性で取得できる
		li.textContent = text.value;
		//ulの子要素として追加する
		document.querySelector('ul').appendChild(li);

		//テキストの値を空文字に
		text.value = '';
		//フォーカスさせるメソッド
		text.focus();


	});

}