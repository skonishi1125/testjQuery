'use strict';
console.log('■ ■ ■ ■ main3.js ■ ■ ■ ■');

//名前を大文字にする、例外処理
{
	// const name = 'taguchi';
	const name = 5;

	try {
		console.log(name.toUpperCase()); //文字列しか使えない。それ以外はエラーになってしまう	
	} catch (e) { //例外時の処理 引数なんでも良いが、errorのeを使う（この中にエラー情報が格納される)
		console.log(e);
	}
	
	console.log('Finish!');
}

//クラス その１  #28 オブジェクトが複数ある場合を考えよう
{
	const posts = [
		{
			text: 'JacaScriptの勉強中...',
			likeCount: 0,
		},
		{
			text: '誤字った！',
			likeCount: 0,
		},
	];


	function show(post) {
		console.log(`${post.text} - ${post.likeCount}いいね`);
	}

	show(posts[0]);

}





//クラス その2

{
	const posts = [
		{
			text: 'JacaScriptの勉強中...',
			likeCount: 0,
			//関数を持たせる
			// show: function() {
			// 	console.log(`${this.text} - ${this.likeCount}いいね`);
			// },

			show() {
				console.log(`${this.text} - ${this.likeCount}いいね`);
			}

		},
		{
			text: '誤字った！',
			likeCount: 0,
			show() {
				console.log(`${this.text} - ${this.likeCount}いいね`);
			}
		},
	];


	function show(post) {
		console.log(`${post.text} - ${post.likeCount}いいね`);
	}

	//show(posts[0]);

	posts[0].show();
	posts[1].show();

}

console.log('------クラス------');

// クラス その3
// https://dotinstall.com/lessons/basic_javascript_objects_v2/52330

{

	class Post {
		constructor(text) {
			this.text = text;
			this.likeCount = 0;
		}

		show() {
			console.log(`${this.text} - ${this.likeCount}いいね`);
		}
	}

	const posts = [
		new Post('JacaScriptの勉強中...'),
		new Post('誤字った！')
	];

		posts[0].show();
		posts[1].show();

}

console.log('------カプセル化------');

// クラス その3
// https://dotinstall.com/lessons/basic_javascript_objects_v2/52330

{

	class Post {
		constructor(text) {
			this.text = text;
			this.likeCount = 0;
		}

		show() {
			console.log(`${this.text} - ${this.likeCount}likes`);
		}

		like() { // ② 名前が変わっても、機能拡張したい場合でもこちらを変えればOKになる
			this.likeCount++;
			this.show();
		}
	}


	const posts = [
		new Post('JacaScriptの勉強中...'),
		new Post('誤字った！')
	];

	posts[0].like();
	// ① posts[0].likeCount++;でも良いが、複数記述されていた場合に詳細変更するときに面倒

	// posts[0].show();
	// posts[1].show();

}

console.log('------静的メソッド------');
//インスタンスから呼び出さず、クラスから呼び出す。Post.showInfo()
// インスタンスから呼び出す例-> posts[0].show(); インスタンス = 子ども

{

	class Post {
		constructor(text) {
			this.text = text;
			this.likeCount = 0;
		}

		show() {
			console.log(`${this.text} - ${this.likeCount}likes`);
		}

		like() {
			this.likeCount++;
			this.show();
		}

		// 静的メソッド thisは使えない 静的メソッドとしたい場合はstaticを記述する
		// phpでいうと Item::getTotalAmountみたいな感じのやつ evernote 静的なメソッドで検索
		static showInfo() {
			console.log(`Post class version 1.0`);
		}
	}

	const posts = [
		new Post('JacaScriptの勉強中...'),
		new Post('誤字った！')
	];

	Post.showInfo();

}

console.log('------クラス拡張------');
//継承の前置き

{

	class Post {
		constructor(text) {
			this.text = text;
			this.likeCount = 0;
		}

		show() {
			console.log(`${this.text} - ${this.likeCount}likes`);
		}

		like() {
			this.likeCount++;
			this.show();
		}

	}

	class SponsoredPost {
		constructor(text, sponsor) {
			this.text = text;
			this.likeCount = 0;
			this.sponsor = sponsor;
		}

		show() {
			console.log(`${this.text} - ${this.likeCount}likes`);
			console.log(`... sponsored by ${this.sponsor}`);
		}

		like() {
			this.likeCount++;
			this.show();
		}

	}



	const posts = [
		new Post('JacaScriptの勉強中...'),
		new Post('誤字った！'),
		new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
	];

	posts[2].show();

}


console.log('------クラスを継承する------');


{

	class Post { // 親クラス
		constructor(text) {
			this.text = text;
			this.likeCount = 0;
		}

		show() {
			console.log(`${this.text} - ${this.likeCount}likes`);
		}

		like() {
			this.likeCount++;
			this.show();
		}

	}

	class SponsoredPost extends Post { //継承 子クラス
		constructor(text, sponsor) {
			super(text); //子のコンストラクタでthisを使うには、super()と記述する必要がある
			this.sponsor = sponsor;
		}

		show() {
			super.show(); // 親クラスで定義されているshowをの記述を利用する
			console.log(`... sponsored by ${this.sponsor}`); //付け足し
		}


	}



	const posts = [
		new Post('JacaScriptの勉強中...'),
		new Post('誤字った！'),
		new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
	];

	posts[2].show();
	posts[2].like();


}












































