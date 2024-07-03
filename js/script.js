// script.js
const questions = [
  {
      question: "HTMLの略は何ですか？",
      answers: [
          { text: "Hyper Text Markup Language", correct: true },
          { text: "Home Tool Markup Language", correct: false },
          { text: "Hyperlinks and Text Markup Language", correct: false },
          { text: "Hyper Tool Markup Language", correct: false }
      ]
  },
  {
      question: "CSSの役割は何ですか？",
      answers: [
          { text: "Webページの構造を定義する", correct: false },
          { text: "Webページのスタイルを定義する", correct: true },
          { text: "Webページの動作を定義する", correct: false },
          { text: "Webページのコンテンツを定義する", correct: false }
      ]
  }
  // 追加の質問をここに追加できます
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.classList.add('hide');
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = '';
  question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
          button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === 'true';
  if (correct) {
      score++;
  }
  Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct === 'true');
  });
  if (questions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide');
  } else {
      nextButton.innerText = '結果を表示';
      nextButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
      element.classList.add('correct');
  } else {
      element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

nextButton.addEventListener('click', () => {
  if (questions.length > currentQuestionIndex + 1) {
      currentQuestionIndex++;
      showQuestion(questions[currentQuestionIndex]);
      nextButton.classList.add('hide');
  } else {
      alert(`クイズ終了！ あなたのスコアは${score}/${questions.length}です。`);
      startQuiz();
  }
});

startQuiz();
