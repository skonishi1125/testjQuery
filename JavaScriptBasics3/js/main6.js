'use strict';

//要素の複製と挿入

// {
// 	document.querySelector('button').addEventListener('click', () => {
// 		const item0 = document.querySelectorAll('li')[0];

// 		//コピー cloneNode(true)としてあげる(falseの場合、空のli要素が生成される)
// 		const copy = item0.cloneNode(true);

// 		//値を挟み込む。item0, 1, <ココ>, 2に挟むなら、親とitem2が必要
// 		const ul = document.querySelector('ul'); // 親
// 		const item2 = document.querySelectorAll('li')[2]; // item2

//		 //copyをitem2のbeforeに挿入してねということ
// 		ul.insertBefore(copy, item2);

// 	});

// }




// 値の削除

document.querySelector('button').addEventListener('click', () => {
	//item1を削除する
	const item1 = document.querySelectorAll('li')[1];

	// item1.remove(); でも良いが、一部ブラウザ非対応

	// removeChildを使う。親Node.removeChild(削除するNode);
	document.querySelector('ul').removeChild(item1);

});

//⭐︎どちらかをコメントアウトすれば動くよ