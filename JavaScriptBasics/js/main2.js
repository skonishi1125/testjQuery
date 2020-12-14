'use strict';
console.log('-----main2.js-----');
const score = Math.random(0,1) * 100;

console.log(score);

if (score >= 80) {
	console.log('Great!');
} else if (score >= 60) {
	console.log('good!');
} else {
	console.log('OK...');
}

//条件分岐をより短く書く
//条件式 ? true処理 : false処理
score >= 80 ? console.log('great!') : console.log('OK...');

//論理演算子 基本同じ。 !で、ではない　の意味になる
/*
if (score >=50 && !(name === 'anakat')) {
  console.log('lohel!');
}
*/
const name = 'taguchi';

if (score >= 50 && name === 'taguchi') {
	console.log(name + '君の点数は50点以上の、' + Math.floor(score) + '点です。');
}

//switch ===が並ぶときによく使う
const signal = 'aaa';

switch (signal) {
	case 'red':
		console.log('Stop!');
		break;
	case 'yellow':
		console.log('Caution!');
		break;
	case 'green':
	case 'blue':
	//２パターン同じ処理にしたい場合は続けて記述する
		console.log('GO!');
		break;
	default:
		console.log('Wrong Signal...');
		break;
}

for (let i = 1; i <= 10; i++) {
	// console.log('hello' + i);	でも良いが
	// テンプレートリテラル。文字列と変数を同時に記述することができる
	console.log(`hello ${i}`);
}

let hp = 100;

while (hp > 0) {
	console.log(`${hp} HP left!`)
	hp -= 15;
}

//do while : whileが条件を満たしていなくても、1回は実行させたいときに使う
let mp = -10;
do {
	console.log(`${mp} MP left!`);
	mp -= 15;
} while (mp > 0);


//ループ処理のスキップ, 中断
for (let i = 1; i <= 10; i++) {
	if (i % 3 === 0){
		continue;
	} else if (i === 8) {
		break;
	}
	console.log(i);
}
































