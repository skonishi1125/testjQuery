'use strict';

// {
// 	document.querySelector('button').addEventListener('click', () => {
// 		const li = document.createElement('li');
// 		const color = document.querySelector('select');

// 		//セレクトボックスの値を入れる htmlにvalue=""の記載がない場合はタグの値が拾われる
// 		li.textContent = `${color.value} - ${color.selectedIndex}`;
// 		document.querySelector('ul').appendChild(li);

// 	});
// }

// {
// 	document.querySelector('button').addEventListener('click', () => {
// 		const colors = document.querySelectorAll('input');
// 		let selectedColor;


// 		colors.forEach(color => {
// 			//ラジオボタンにチェックが入っていたら
// 			if (color.checked === true) {
// 				selectedColor = color.value;
// 			}

// 		});

// 		//ラジオボタンが選択されていない場合の処理
// 		if (typeof selectedColor === 'undefined') {
// 			alert('選択されていません！');
// 			return;
// 		}

// 		const li = document.createElement('li');
// 		li.textContent = selectedColor;

// 		document.querySelector('ul').appendChild(li);

// 	});



// }


// {
// 	document.querySelector('button').addEventListener('click', () => {

// 		//チェックボックス　複数の要素となるので、All
// 		const colors = document.querySelectorAll('input');

// 		//選択された値を保持する配列
// 		const selectedColors = [];

// 		//inputで作られたチェックボックスの分だけ回す。1つ1つ確認
// 		colors.forEach(color => {

// 			//checkされていたら
// 			if (color.checked === true) {
// 				//value=""に入っている値をselectedColors配列にプッシュする
// 				selectedColors.push(color.value);
// 			}
// 		});

// 		//バグチェック
// 		if (selectedColors.length === 0) {
// 			alert('未選択です。');
// 			return;
// 		}

// 		const li = document.createElement('li');
// 		li.textContent = selectedColors.join(', '); //どっちの記法でもOK join:配列を繋げるメソッド
// 		//li.textContent = selectedColors; //区切る方法未記入の場合は勝手にカンマ区切りとなる

// 		document.querySelector('ul').appendChild(li);

// 	});

// }


{
	//cmd opt j コンソール表示
	let i = 0;

	document.querySelector('button').addEventListener('dblclick', () => {
		console.log('ダブルクリックされました。');
	});

	// document.addEventListener('mousemove', () => {
	// 	// i++;
	// 	// console.log(`${i}回マウスが動きました。`);
	// 	console.log('mousemoved!');
	// })

	//マウスの座標を取得する 引数は慣習的にeらしい(eventのe)
	document.addEventListener('mousemove',e => {
		console.log(e.clientX + ' ' + e.clientY);
	});

	//キーボードイベント
	document.addEventListener('keydown',e => {

		console.log(e.key);
	});

}













