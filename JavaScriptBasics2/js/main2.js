'use strict';
console.log('■ ■ ■ ■ main2.js ■ ■ ■ ■');

// #17 文字列の操作
{
	const str = 'hello';

	//文字列の長さ取得
	console.log(str.length); //5文字

	// str.substring(開始位置, 終了位置);
	console.log(str.substring(1,3));

	// 文字列にアクセス
	console.log(str[1]); // 配列のような書き方となるが、代入したりはできない

}

//文字列の操作2
{
	const d = [2019, 11, 14];

	console.log(d.join('/')); // dを''に指定した文字列で連結する
	//空文字でもOK

	const t = '17:08:24';
	console.log(t.split(':')); // tを指定した文字列で分割する phpでいうexplode(":",t);だ

	//分割代入 const [a, b, c, d] = scores; などのこと
	const [hour, minute, second] = t.split(':');
	console.log(hour);
	console.log(minute);
	console.log(second);


}

// 数値操作
{
	const scores = [10, 3, 9];
	let sum = 0;

	scores.forEach(score => {
		sum += score;
	});

	const avg = sum / scores.length;

	console.log(sum); // 10 + 3 + 9 = 22
	console.log(avg);
	console.log(Math.floor(avg));
	console.log(Math.ceil(avg));
	console.log(Math.round(avg));
	console.log(avg.toFixed(3)); //小数第３位までを記載

	//ランダム作成
	console.log(Math.random());

}

// ランダムな整数値を作成する
{
	//サイコロ
	// random()で出るのは0 <= random < 1
	// 6倍すると、0 <= random < 6
	// 0~5.99999までの値しか出ない。サイコロは1~6までなので、+ 1して1.0 ~ 6.999までにする
	// 小数点は要らないので、floorを使う

	console.log(Math.floor(Math.random() * 6) + 1);
}

//日にち  いろいろある。#21 現在日時を扱ってみよう
console.log('-------------');

{
	const d = new Date();
	console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`);
	// getMonth().0~11月で表示される

	console.log(d.getTime());
	// UTC 1970/1/1/00:00分から何ミリ秒経過したのかを出力してくれる
	// 様々な国の時刻データを取得する場合はこれで取得する

}

//特定の日時を表す

{
	const d = new Date(2019, 10); // 2019.11/01 00:00:00
	d.setHours(10, 20, 30) // 2019.11/01 10:20:30
	d.setDate(31); // 11月に31日はないので、2019/12/01 10:20:30となる

	d.setDate(d.getDate() + 3); //dの日(12月1日)を取得。+3日後 2019/12/04 10:20:30となる


	console.log(d);
}

//ダイアログ
{
	// alert('hello');
	// const answer = confirm('削除しますか？'); // 確認true or キャンセルfalseの返り値がある
	// 	if (answer) {
	// 		//console.log('削除しました。');
	// 	} else {
	// 		//console.log('キャンセルしました');
	// 	};

}


//タイマー機能
{
	let i = 0;

	// function showTime() {
	// 	console.log(new Date());
	// 	i++;
	// 	if (i > 2) {
	// 		clearInterval(intervalId); //区別するための値を入れる 止めるための値を入れる
	// 	}
	// }

	//const intervalId = setInterval(showTime, 1000); 
	//ミリ秒感覚で指定の関数を実行する
	//showtime()とは書かない。書いたら関数のreturnする値を渡してしまう

	//intervalId 別のタイマーと区別するための値が入る

}




//setTimeout(showTime, 1000); 1000ms後に1回だけ実行してという意味
{
	let i = 0;

	// function showTime() {
	// 	console.log(new Date());
	// 	const timeoutId = setTimeout(showTime, 1000); //タイマーを区別するための値を入れる
	// 	// showTimeをもう一度呼び出している。->1000ms後にもう一度呼び出す、1000ms後もう一度...

	// 	i++;
	// 	if (i > 2) {
	// 		clearTimeout(timeoutId);
	// 	}
	// }

	// showTime();

}

// アロー関数で表す
// () => { console.log('aaa'); } だけになるが、関数名がない！
// let 〇〇 = () => {...} と記載して、関数に名前をつけてやる。

{

	let showTime = () => {
		console.log('aaa');
	}; 

	showTime();

}

//setTimeoutとsetIntervalの違い
//https://dotinstall.com/lessons/basic_javascript_objects_v2/52326
//setTimeoutの方が、負荷軽減の時に使われる






























