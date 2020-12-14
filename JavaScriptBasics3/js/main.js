'use strict';

// {
// 	function update() {
// 		//セレクタで指定
// 		// document.querySelector('h1').textContent = 'Changed!';

// 		// idで指定 (querySelector) この場合は#が必要
// 		// document.querySelector('#target').textContent = 'Changed!'; 

// 		//idで指定 (getElemntById) この場合はidであることがわかっているので#不要で記述できる
// 		document.getElementById('target').textContent = 'Changed by getElement!';

// 		// pを変化させる 指定のない場合、はじめのセレクタだけ。
// 		// document.querySelector('p').textContent = 'Changed p !';  

// 		//指定のpを変化させる ~Allで全てを選択し、[1]を指定
// 		//document.querySelectorAll('p')[1].textContent = 'Changed p !'; 


// 		// forEachで全ての要素を選択、指定する
// 		document.querySelectorAll('p').forEach((p, index) => {
// 			p.textContent = `${index}番目のpです。`; 	
// 		});


// 	}

// 	setTimeout(update, 1000);
	
// }

//id属性がついていたらgetElementById,id属性がなければquerySelector / querySelectorAllを使用する



{
	//addEventListener(引数('文字列', 関数);
	document.querySelector('button').addEventListener('click', () => {
		document.getElementById('target').textContent = 'Changed!';	
		document.querySelectorAll('p')[2].textContent = 'Runボタンが押されました。';
	});

}