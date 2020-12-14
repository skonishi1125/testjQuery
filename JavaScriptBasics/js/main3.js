'use strict';
console.log('-----main3.js-----');

// 関数で処理をまとめる
function showAD() {
	console.log('------');
	console.log('- Ad -');
	console.log('------');
}

console.log('aaa');
showAD();
console.log('\n');

//引数を使用した関数

function showAd2(message = '未定義') { //let constはいらない
	console.log('------');
	console.log(`- ${message} -`)
	console.log('------');
}

showAd2('Header Ad');
showAd2();



//returnで値を返す, 関数宣言
function sum(a, b, c) {
	return a + b + c; //これ以降は実行されないので気を付ける
}

// sum(1, 2, 3);
// sum(3, 4, 5);

const total = sum(1, 2, 3) + sum(3, 4, 5); //18
console.log(total);

/*
関数宣言
function 関数名 (仮引数, 仮引数, ...) {
	処理;
	return 返り値;
} セミコロン不要
呼び出し：関数名 (実引数, 実引数, ...);

関数式 定数や変数に関数を格納する形
const 定数名 = function(仮, 仮, ...) { 関数式の関数は、「無名関数」と呼ばれる
	処理;
	return 返り値;
}; 変数に代入するような式のときは、文末にセミコロンが必要になる
*/


//関数式
const minus = function(a, b, c) {
	return a - b - c;
};

const total2 = minus(10, 2, 5) + minus(10, 1, 0); //3 + 9
console.log(total2);

//アロー関数
console.log('-----アロー関数------');

const sum2 = (a, b, c, d) => a + b + c + d;
const total3 = sum2(3, 5, 1, 1) + sum2(1, 1, 1, 4);
console.log(`total3 = ${total3}`);

// 書き換えてみる.functionを取り,{}に向けて矢印を書く。
// returnするだけ（返り値を作るだけ）なら矢印の先にreturnする値を書いてやる
// 引数が一つなら、()もとってよし

// 元
// const double = function(a) {
// 	return a * 2;
// }

// functionを取る
// const double = (a) => {
// 	return a * 2;
// }

// returnするだけなので矢印の先に値のみ書く、引数一つなので()も取る
const double = a => a * 2;

console.log(double(4));




































