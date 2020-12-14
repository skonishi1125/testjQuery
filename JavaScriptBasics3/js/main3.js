'use strict';

{
	document.querySelector('button').addEventListener('click', () => {

		const targetNode = document.getElementById('target');

		//クラスを付与する(クラスをまるっと書き換えられる)
		//targetNode.className = 'my-color';

		//元々ついていたmy-borderも付与してやる必要がある
		//targetNode.className = 'my-color my-border';

		//classList.addを使うと、元々のクラス + 新しいクラス　をつけることができる
		//targetNode.classList.add('my-color');

		// classList.contains：ついていたらtrue いなかったらfalseが帰ってくる
		if (targetNode.classList.contains('my-color') === true ) {
			//Runクリック時についていたらクラスを外す
			targetNode.classList.remove('my-color');
		} else {
			//ついていなかったらクラスをつける
			targetNode.classList.add('my-color');
		}

		// 短い命令として、targetNode.classList.toggle('my-color');　とすると上と全く同じ処理


	});


}