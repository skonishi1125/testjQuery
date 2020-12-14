'use strict';

{
	document.querySelector('button').addEventListener('click', () => {

		//要素を作るメソッド：createElement('要素名')
		const item2 = document.createElement('li');

		//要素内の文字を作成する
		item2.textContent = 'item 2';

		// DOMツリーに入れる。まず親を取得
		// const ulNode = document.querySelector('ul');
		// ↑でも良いが、定数名をわかりやすいようにulとした
		const ul = document.querySelector('ul');

		//ulの子要素末尾に入れる
		ul.appendChild(item2);


	});

}