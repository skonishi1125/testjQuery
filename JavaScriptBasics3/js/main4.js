'use strict';

{
	document.querySelector('button').addEventListener('click', () => {
		const targetNode = document.getElementById('target');

		// targetNode.textContent = 'Dot-Install';

		//targetNode.textContent = targetNode.data-translation...と思いきや
		//クラス属性とカスタムデータ属性は違う書き方になる dataset.[自分でHTMLで定めた単語]
		targetNode.textContent = targetNode.dataset.translation;

	});

}