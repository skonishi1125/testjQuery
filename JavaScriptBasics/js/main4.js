'use strict';

console.log('---------main4.js----------');

//スコープ
function f() {
	const x = 1; //これをコメントアウトした場合、グローバルの x = 20 が使われる
	console.log(x);
}
const x = 20; //グローバルスコープ

f();
console.log(x);

//例として関数を利用したが、ifやwhileなどでもこの考え方は生まれる
//{ } <- ブロックという　ブロックのあるところではこの考え方になる↓

const y = 15;
const z = 10;
if (y === 15) {
	const z = 5;
	console.log(z);
}
console.log(z);

//コードをブロックで囲おう
{
	const a = 100;
	console.log(a);
}
