//	風習的にtsであることが多い
//	↓TypeScriptのみで記述できる構文と、JavaScriptで記述できる構文を共存させることが可能

/*
class User {
	
}

console.log('hello world');
*/

// 変数の静的型付け < > 動的型付け
// javascript

//var x = 10;
//x = "hello"; //文字列を代入すると、文字列型の変数に変化する(動的)

// TypeScript 

var x: number = 10;
x = "hello";	//numberと型を決めているので、helloなどの文字列を代入するとエラーが発生する