'use strict';

//配列
{
	const scores = [80, 90, 40];
	console.log(scores);
	console.log(scores[1]);

	scores[2] = 44; 
	//constで定義した関数でできないのは、scores=10;といったようなscoresそのものへの再代入
	//配列の要素への代入はできる
	console.log(scores);

	console.log(scores.length);
}

//配列とループ
{
	const scores = [80, 90, 40, 99];

	// console.log(`Score: ${scores[0]}`);
	// console.log(`Score: ${scores[1]}`);
	// console.log(`Score: ${scores[2]}`);

	// for (let i = 0; i < 3; i++) {
	for (let i = 0; i < scores.length; i++) {
		console.log(`Score ${i} : ${scores[i]}`);
	}

}

// 先頭、末尾の配列を操作する
// unshift() : a[0]の方から値を追加する
// push() : a[]の末尾に値を追加する ★まずはこれを覚える
// shift() : a[0]の方から値を削除する
// pop() : a[]の末尾の値を削除する

console.log('------------');

{
	const scores = [80, 90, 40, 99];
	scores.push(60,50); //末尾に60, 50が追加される
	scores.shift(); //先頭の80が削除される


	for (let i = 0; i < scores.length; i++) {
		console.log(`Score ${i} : ${scores[i]}`);
	}
}

// 途中の要素を操作する
// splice(変化開始位置, 削除数, 追加する要素)...

console.log('------------');

{
	const scores = [80, 90, 40, 99];
	scores.splice(1, 0, 30, 70); //90の前に30, 80を追加
	scores.splice(scores.length - 1, 1); // 99を削除(配列の長さ-1の添字のものを, 1つ消す)

	for (let i = 0; i < scores.length; i++) {
		console.log(`splice test Score ${i} : ${scores[i]}`);
	}
}

//スプレッド構文 ...
console.log('------------');

{
	//配列をくっつける
	const otherScores = [10, 20];
	const scores = [80, 90, 40, 70, ...otherScores];
	console.log(scores);

	function sum(a, b) {
		console.log(a + b);
	}

	sum(...otherScores);
	//sum(10, 20);

}

//分割代入
console.log('------------');

{
	const scores = [80, 90, 40, 70];
	//これらの値を別々の定数にする

	const [a, b, c, d] = scores; //分割代入
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);

}
console.log('------------');
{
	const scores = [80, 90, 40, 70];
	//定数に入れたいのは2つだけ。後は配列
	//レスト構文 ...配列名　と記載すると、割り当てた以外の要素をその配列に格納してくれる
	const [a, b, ...others] = scores; //分割代入
	console.log(a);
	console.log(b);
	console.log(others);

	console.log(`others配列の長さ ： ${others.length}`);

	//値の交換
	let x = 30;
	let y = 70;
	[x, y] = [y, x]; //分割代入。xにy、yにxを代入してね
	console.log(x + ' ' + y);

}

// forEach() 関数を渡してあげる
// アロー関数で書く場合は、functionを消して、{}に向けて => を記述すればOK！
console.log('------------');
{
	const scores = [80, 90, 40, 70];

	// scores.forEach((score) => {
	scores.forEach((score, index) => { //forEachの2番目の引数:その要素のインデックスを表す
		console.log(`Score ${index} : ${score}`);
	});

	console.log('アローを使わない記法');

	const array = [10, 20, 30];

	array.forEach( function(a, ind){
		console.log(`array ${ind} : ${a}`);
	});

}

//map関数 関数を渡してあげる
{
	const prices = [180, 190, 200];

	// const updatePrices = prices.map((price) => {
	// 	return price + 20;
	// });

	const updatePrices = prices.map(price => price + 20);
	console.log(updatePrices);

}

/*
記述する際に、こんがらないように記述する方法

1.何を使いたいかを明確にする
	prices.map();

2.アロー関数をつける
	prices.map( () => {
	
	});

3.定数や引数、処理を書く
	const newArray = prices.map( (price) => {
		return price - 50;
	});

4.省けるなら省く 引数1つなら()を省ける。returnするだけなら{}を省ける。
	const newArray = prices.map(price => price - 50);

*/

console.log('--------');
//filter関数
{
	const numbers = [1, 4, 7, 8, 10];

	// const evenNumbers = numbers.filter((number) => {
	// 	if (number % 2 === 0) {
	// 		return true; //trueの値が抽出される
	// 	} else {
	// 		return false;
	// 	}
	// });


	//短いver
	const evenNumbers = numbers.filter(number => number % 2 === 0);
	console.log(evenNumbers);

}







//オブジェクト記法
console.log('-----オブジェクト記法----');

{
	//const point = [100, 180];

	const point = {
		x: 100, //x: 100 プロパティ(メンバ)と呼ぶ x: 単体を、名前(キー)と呼ぶ 100単体を値と呼ぶ
		y: 180, //カンマなしでもOKだが体裁を整える意味で書いている
	}; 	// {}だが、値の代入をしているのでセミコロンを記述する
	console.log(point);

	// プロパティを操作する
	console.log(point.x);
	console.log(point['y']); // どっちの記法でもOK

	point.x = 120;
	point['y'] = 10;

	console.log(point);

	//プロパティの追加、削除
	//z座標の追加
	point.z = 90;

	//a座標の削除
	point.a = 100;
	delete point.a;

	console.log(point);

}

//オブジェクトへのスプレッド記法、レスト構文
console.log('---------');

{
	const otherProps = {
		r: 4,
		color: 'red',
	};

	//otherPropsを配列に追加する
	const point = {
		x: 100,
		y: 180,
		...otherProps,
	}; 

	console.log(point);

	//レスト構文　オブジェクトのキーと同じ定数名を使う必要がある
	const {x, r, ...others} = point;
	console.log(x);
	console.log(x);
	console.log(others);

}

//Oblect.keyでforEachを使う
//オブジェクトにはforEachはそのままでは使えない
console.log('---------');

{
	const point = {
		x: 100,
		y: 180,
	};

	const keys = Object.keys(point); //キー(xなど)を取得
	console.log(`keys配列の中身 : ${keys}`);
	console.log(`point[keys[0]]で値を取得する : ${point[keys[0]]}`);


	keys.forEach(key => {
		console.log(`Key: ${key} Value: ${point[key]}`);
		//${point.key}は使えない。keyが現在文字列で取得されているので、[key]で繋げてあげよう
	});

	// オブジェクト配列
	const points = [
		{x: 30, y: 20},
		{x: 10, y: 50},
		{x: 40, y: 40},
	];
	console.log(points[1].y);
}

console.log('------');

//変数に代入する

{
	// let x = 1;
	// let y = x;
	// x = 5;
	// console.log(x); // 5
	// console.log(y); // 1

	let x = [1, 2];
	let y = x;
	x[0] = 5;
	console.log(x);
	console.log(y); 
	//　y = [1,2]にはならず、[5, 2]となる。
	// 複雑な値の場合、yには 「xの入っている場所」というデータが格納される
	// （単純な値だと y = 「xの値」が入る)
	// 詳細はevernote or 読解JavaScriptオブジェクト編 #16

	//丸ごとコピーしたい場合はスプレッド演算子

	let a = [1, 2];
	let b = [...a]; // 場所データではなく、値そのものを代入
	a[0] = 5;
	console.log(a);
	console.log(b); 

}


































