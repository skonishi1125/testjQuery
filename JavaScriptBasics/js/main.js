'use strict';

console.log('hello');
console.log("hello");

//シングルを使いたい場合、ダブルでくくる
console.log("It's me!");

//バックスラッシュを利用する
console.log('It\'s me!');

// \n:改行 \t:タブ
console.log('hel\nlo worl\td');

//文字列の連結
console.log('hello' + 'world');

//四則演算
console.log((10 + 3 - 10) * 2 / 10); // 6 / 10 -> 0.6
console.log(10**3); // 10の3乗

//定数 const
const price = 150;

//変数 let, var
//varは古いのであまり使わない

console.log(price * 140);
console.log(price * 160);
// cmd + dで選択した数字を複数書き換える cmd + /でコメントアウト

// price = 170; constで定義した定数には再定義できない
let price2 = 170;
console.log(price2 * 140);
console.log(price2 * 160);

let test = 500;
test += 100; //600

test--; // 599

test *= 2; // 1198

console.log(test);

//データ型を調べる
console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // objectと表示されるが、有名なjsのバグらしい

//文字列のたしひき
//-はできる
console.log('5' - 3);

//+は文字列の連結となる
console.log('5' + 3); // 53と表示

//型変換
console.log(parseInt('5', 10) + 3); // '5'という文字を、10 進数に直す + 3 => 8

console.log(parseInt('hello',10)); // NaNと表示される Not a Number

//比較演算子
console.log(1000 > price); // price = 150 trueとなる
console.log(150 === price); // 等しい時は、イコール3つ

//単一の値を真偽値で確認する
//false => 0, null, undefined, '', false
//true => それ以外

console.log(Boolean(0));
console.log(Boolean('hello'));

























