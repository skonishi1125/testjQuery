'use strict';
 
  // word = words[Math.floor(Math.random() * 3 )];
  // 上でもいいが、配列の長さに沿って乱数が決まるように変更する

{
  function setWord() {
    // wordsの中からランダムに選択し、選択した値を削除する（重複対策)
    // 例
    // const scores = [80, 90, 40, 99];
    // scores.splice(1, 0, 30, 70); //90の前に30, 80を追加
    // scores.splice(scores.length - 1, 1); // 99を削除(配列の長さ-1の添字のものを, 1つ消す)
    
    // wordに入れた後、splice(0 ~ 2.9999, 1)の値を1つ消すということ
    // spliceは値が1つでも配列として残るので、randomに選択された値の返り値に[0]とつけて格納する
  
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }


  const words = [
    'red',
    'blue',
    'pink',
  ];
  let word;
  let loc = 0; // location(何文字目であるか)
  let startTime;
  let isPlaying = false; // ゲームプレイ中かどうか
  const target = document.getElementById('target');


  document.addEventListener('click',() => {

    if (isPlaying === true) {
      return;
    }

    //タイム計測開始
    startTime = Date.now();
    //ゲームプレイ開始
    isPlaying = true;
    setWord();
  });

  document.addEventListener('keydown', e => {

    // メイン処理以外のケースを除外し、メイン処理をわかりやすくする(早期リターン、アーリーリターン)
    if (e.key !== word[loc]) {
      return;
    }

    
    // if (e.key === word[loc]) {
    loc++;

    // 1: _ed
    // 2: __d
    // 3: ___

    // locの数だけアンダーバーを繋げる
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {

      // wordsから単語がなくなった時
      if (words.length === 0) {
        //  タイム計測
        const elapsedTime = ((Date.now() - startTime) / 1000) . toFixed(2); //現在時刻 - 計測時刻 ミリ秒なので1000で割って秒に。小数第２位まで


        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds.`;
        // 終了処理 これがないと、値がないのにsetWord()が走り、何もない値がtargetにセットされる
        return;
      }
      setWord();
    }


    console.log(e.key);


  });
}