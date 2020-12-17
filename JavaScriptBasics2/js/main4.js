'use strict'

{
  const scores = [10, 20, 30];
  console.log(scores);
  console.log(scores[1]);
  
  // php :foreach($array as $a){...}だが、jsは配列名.forEachとする
  scores.forEach(score => {
    console.log(score);
  });
  
  //配列名.メソッド名 であることが多い
  scores.unshift(5);
  console.log(scores);
  
  //scores[1]から2こ消して、50と60を代入している
  scores.splice(1,2,50,60);
  console.log(scores);

  const spleadArray = [1, 2, 3, ...scores];
  console.log(spleadArray);

  function sum1(a, b) {
    console.log(a + b);
  }
  ///spleadArrayの[0]+[1]になる
  sum1(...spleadArray);

  // const arrow = (a, b) => {
  //   return a*a + b*b;
  // }
  const arrow = (a, b) => a*a + b*b;

  console.log(arrow(...spleadArray));


  //関数を渡す関数
  const prices = [100, 200, 300];

  // const updatePrices = prices.map( (price) => {
  //   return price + 20;
  // });
  const updatePrices = prices.map(price => price + 20);

  console.log(updatePrices);

  const nums = [1, 4, 7, 8, 10];

  const evenNums = nums.filter( (num) => {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  // const evenNums = nums.filter(num => num % 2 === 0);
  console.log(evenNums);

  //if文簡略
  const a = 1;
  a === 1 ? console.log('a=1！') : console.log('a = not 1...');


  //レスト構文
  const props = {
    r: 10,
    color: 'red',
  }

  const pt = {
    x: 100,
    y: 150,
    ...props, //スプレッドで接続
  };

  // x, rは単一の定数として再定義される ...etcはその他の値がetc配列に入る
  const {x, r, ...etc} = pt;
  console.log(x);
  console.log(r);
  console.log(etc);
}

{
  console.log('keys.forEach');

  const array = {
    a: 100,
    b: 200,
    c: 300,
  };

  console.log(array['c']);

  const keys = Object.keys(array); //文字列として格納
  keys.forEach(key => {
    console.log(`key: ${key} value: ${array[key]}`);
  })

}

{
  // const ans = confirm('削除しますか？');
  // ans === true ? console.log('delete!') : console.log('canceled.');
}


  // インターバル
{
  let i = 0;
  function showTime() {
    i++;
    if (i > 1) {
      clearInterval(intId);
    }

    console.log(Date());
  }
  const intId = setInterval(showTime, 2000);
}

//クラス
{
  class Menu {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }

    show() {
      console.log(`${this.name}は${this.price}円です。`);
    }

    setTax() {
      return this.price * 1.08;
    }

  }

  const menus = [
    new Menu('pasta', 800),
    new Menu('Hamburg', 850),
    new Menu('和牛ステーキ300g', 2000),
  ]

  menus[0].show();
  const tax = menus[2].setTax();
  console.log(tax);



}