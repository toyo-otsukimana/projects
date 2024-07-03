// 初期問題リスト
let Question = [
  ["HTMLドキュメントのルート要素は何ですか？",
    "1. <body>",
    "2. <html>",
    "3. <head>",
    "2"],
  ["HTMLで段落を表す要素はどれですか？",
    "1. <p>",
    "2. <div>",
    "3. <span>",
    "1"],
  ["画像をHTMLに表示するための要素はどれですか？",
    "1. <image>",
    "2. <img>",
    "3. <pic>",
    "2"],
  ["HTMLでリストアイテムを表す要素はどれですか？",
    "1. <li>",
    "2. <ol>",
    "3. <ul>",
    "1"],
  ["HTMLドキュメントのメタデータを含む要素はどれですか？",
    "1. <meta>",
    "2. <head>",
    "3. <title>",
    "2"]
];

// 初期変数定義
let Q = document.getElementById('_question');
let A1 = document.getElementById('_ans1');
let A2 = document.getElementById('_ans2');
let A3 = document.getElementById('_ans3');
let Correct = 0;
let Qcnt = 0;

// 問題をランダムにシャッフル
let shuffledQuestions = Question.sort(() => Math.random() - 0.5);

// 問題を画面に表示する処理
function Q_Set() {
  Q.textContent = shuffledQuestions[Qcnt][0];
  A1.textContent = shuffledQuestions[Qcnt][1];
  A2.textContent = shuffledQuestions[Qcnt][2];
  A3.textContent = shuffledQuestions[Qcnt][3];
}

// 画面に表示
Q_Set();

// 回答ボタンを押したときの処理
function Answer_Check(ans) {
  if (ans == shuffledQuestions[Qcnt][4]) {
    alert("正解");
    Correct++;
  } else {
    alert("不正解");
  }
  Qcnt++;
  if (Qcnt == shuffledQuestions.length) {
    Q.textContent = "問題は以上です。正解数は" + Correct + "でした。";
    A1.textContent = "";
    A2.textContent = "";
    A3.textContent = "";
  } else {
    Q_Set();
  }
}