// 初期問題リスト
let Question = [
  ["CSSでテキストの色を変更するプロパティは何ですか？",
    "1. font-color",
    "2. color",
    "3. text-color",
    "2"],
  ["CSSで背景色を設定するプロパティはどれですか？",
    "1. bgcolor",
    "2. background-color",
    "3. background",
    "2"],
  ["CSSでフォントサイズを設定するプロパティはどれですか？",
    "1. font-size",
    "2. text-size",
    "3. font-height",
    "1"],
  ["CSSで要素の外側の余白を設定するプロパティはどれですか？",
    "1. padding",
    "2. spacing",
    "3. margin",
    "3"],
  ["CSSで要素の幅を設定するプロパティはどれですか？",
    "1. length",
    "2. width",
    "3. size",
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