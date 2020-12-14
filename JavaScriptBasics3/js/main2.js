// #06 要素の属性を操作してみよう 属性 : <h1 title="">のtitleなど
'use strict';

{
	document.querySelector('button').addEventListener('click', () => {
		//長い宣言を定数に入れてやる
		const targetNode = document.getElementById('target');
		targetNode.textContent = "changed!";

		//属性操作
		targetNode.title = 'This is title!';

		//styleも操作してみる
		targetNode.style.color = 'red';

		//background-colorなど、ハイフンつきのもの:ハイフンを消して大文字で指定する
		targetNode.style.backgroundColor = 'skyblue';

		// JavaScriptでスタイルを整えてしまうとCSSとの役割分担が曖昧となる
		// なので、見た目の指定はCSS class属性の操作はJavaScriptとするのが一般的


	});


}

// document.querySelector('button').addEventListener('click', () => {
// 	const targetNode = document.getElementById('target');
	
// 	// 間違えてtargetNodeではなくtargetを指定してしまった 
// 	target.textContent = 'Changed!';
// 	target.title = 'This is the title!'; 
// 	target.style.color = 'red'; 
// 	target.style.backgroundColor = 'skyblue'; // targetの中身を確認 
// 	console.dir(target); 
// });