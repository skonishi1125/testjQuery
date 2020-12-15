// 型

/*
number
string
boolean
any
*/

var i: number;
var j: number = 10;
var k = 10; // numberと自動認識してくれる

var x; // any
x = 10;
x = 'Hello'; // anyなので入れられる

// 配列
var results: number[]; // 型の後ろに大括弧をつける。

console.log(`j : ${j} k : ${k} x : ${x}`);

console.log('----------列挙型------------');

enum Signal {
  Red = 0,
  Blue = 1,
  Yellow = 2,
}

var result: Signal;


