// script.js
document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock = document.getElementById('jscodeBlock');
  const codeString = 
  `function addItem() {
    var newItem = document.createElement('li');
    newItem.textContent = '新しい項目';
    document.getElementById('myList').appendChild(newItem);
}
`;

  jscodeBlock.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock1 = document.getElementById('jscodeBlock1');
  const codeString =
  `const i = 3.14159;
  console.log(i); // 3.14159`;
  jscodeBlock1.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock2 = document.getElementById('jscodeBlock2');
  const codeString =
  `let y = 30;
if (true) {
    let y = 40;
    console.log(y); // 40
}
console.log(y); // 30
`;
  jscodeBlock2.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock3 = document.getElementById('jscodeBlock3');
  const codeString =
  `var x = 10;
console.log(x); // 10
x = 20;
console.log(x); // 20`;
  jscodeBlock3.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock4 = document.getElementById('jscodeBlock4');
  const codeString =
  `//let num = 5;
  if (num > 0) {
    console.log("numは正の値です。");
} else if (num < 0) {
    console.log("numは負の値です。");
} else {
    console.log("numはゼロです。");
}`;
  jscodeBlock4.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock5 = document.getElementById('jscodeBlock5');
  const codeString = 
  `//let fruit = 'apple';
switch (fruit) {
    case 'apple':
        console.log('apple.');
        break;
    case 'banana':
        console.log('banana.');
        break;
    case 'orange':
        console.log('orange.');
        break;
    default:
        console.log('Unknown fruit.');
}`;
  jscodeBlock5.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock6 = document.getElementById('jscodeBlock6');
  const codeString =
  `for (let i = 1; i <= 10; i++) {
    console.log(i);
}`;
  jscodeBlock6.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock7 = document.getElementById('jscodeBlock7');
  const codeString =
  `let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
`;
  jscodeBlock7.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock8 = document.getElementById('jscodeBlock8');
  const codeString =
  `let greeting = "Hello, world!";
let name = 'Alice';
`;
  jscodeBlock8.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock9 = document.getElementById('jscodeBlock9');
  const codeString =
  `let number1 = 10;
let number2 = 3.14;
`;
  jscodeBlock9.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock10 = document.getElementById('jscodeBlock10');
  const codeString =
  `let isRaining = true;
let hasDog = false;
`;
  jscodeBlock10.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock11 = document.getElementById('jscodeBlock11');
  const codeString =
  `let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
`;
  jscodeBlock11.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock12 = document.getElementById('jscodeBlock12');
  const codeString =
  `let person = { name: "John", age: 30, city: "New York" };
let car = { brand: "Toyota", model: "Camry", year: 2020 };
`;
  jscodeBlock12.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock13 = document.getElementById('jscodeBlock13');
  const codeString =
  `let undefinedVariable;`;
  jscodeBlock13.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock14 = document.getElementById('jscodeBlock14');
  const codeString =
  `let nullValue = null;`;
  jscodeBlock14.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock15 = document.getElementById('jscodeBlock15');
  const codeString =
  `function add(a, b) {
    return a + b;
}`;
  jscodeBlock15.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock16 = document.getElementById('jscodeBlock16');
  const codeString =
  `const element = document.getElementById('id');`;
  jscodeBlock16.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock17 = document.getElementById('jscodeBlock17');
  const codeString =
  `const elements = document.getElementsByClassName('className');`;
  jscodeBlock17.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock18 = document.getElementById('jscodeBlock18');
  const codeString =
  `const elements = document.getElementsByTagName('tagName');`;
  jscodeBlock18.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock19 = document.getElementById('jscodeBlock19');
  const codeString =
  `const element = document.querySelector('.className');`;
  jscodeBlock19.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock20 = document.getElementById('jscodeBlock20');
  const codeString =
  `const elements = document.querySelectorAll('.className');`;
  jscodeBlock20.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock21 = document.getElementById('jscodeBlock21');
  const codeString =
  `const newElement = document.createElement('div');`;
  jscodeBlock21.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock22 = document.getElementById('jscodeBlock22');
  const codeString =
  `parentElement.appendChild(newElement);`;
  jscodeBlock22.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock23 = document.getElementById('jscodeBlock23');
  const codeString =
  `const element = document.getElementById('myElement');
element.textContent = 'Hello, world!';
`;
  jscodeBlock23.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock24 = document.getElementById('jscodeBlock24');
  const codeString =
  `const element = document.getElementById('myElement');
element.innerHTML = 'Hello, world!';
`;
  jscodeBlock24.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock25 = document.getElementById('jscodeBlock25');
  const codeString =
  `const element = document.getElementById('myElement');
element.setAttribute('class', 'newClass');
`;
  jscodeBlock25.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock26 = document.getElementById('jscodeBlock26');
  const codeString =
  `const element = document.getElementById('myElement');
element.style.color = 'red';
`;
  jscodeBlock26.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock27 = document.getElementById('jscodeBlock27');
  const codeString =
  `const parentElement = document.getElementById('parent');
const childElement = document.getElementById('child');
parentElement.removeChild(childElement);
`;
  jscodeBlock27.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock28 = document.getElementById('jscodeBlock28');
  const codeString =
  `document.getElementById('myButton').addEventListener('click', () => {
    alert('Button was clicked!');
});
`;
  jscodeBlock28.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock29 = document.getElementById('jscodeBlock29');
  const codeString =
  `document.getElementById('myElement').addEventListener('mouseover', () => {
    console.log('Mouse is over the element!');
});
`;
  jscodeBlock29.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock30 = document.getElementById('jscodeBlock30');
  const codeString =
  `document.getElementById('myElement').addEventListener('mouseout', () => {
    console.log('Mouse has left the element!');
});
`;
  jscodeBlock30.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock31 = document.getElementById('jscodeBlock31');
  const codeString =
  `document.addEventListener('keydown', (event) => {
    console.log('A key was pressed:', event.key);
});
`;
  jscodeBlock31.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock32 = document.getElementById('jscodeBlock32');
  const codeString =
  `document.addEventListener('keyup', (event) => {
    console.log('A key was released:', event.key);
});
`;
  jscodeBlock32.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock33 = document.getElementById('jscodeBlock33');
  const codeString =
  `document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted');
});
`;
  jscodeBlock33.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock34 = document.getElementById('jscodeBlock34');
  const codeString =
  `window.addEventListener('load', () => {
    console.log('Page loaded');
});
`;
  jscodeBlock34.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock35 = document.getElementById('jscodeBlock35');
  const codeString =
  `element.addEventListener('event', () => {
    // ここに関数の処理を書く
});
`;
  jscodeBlock35.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock36 = document.getElementById('jscodeBlock36');
  const codeString =
  `element.removeEventListener('event', functionName);`;
  jscodeBlock36.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock37 = document.getElementById('jscodeBlock37');
  const codeString =
  `function functionName(parameter1, parameter2) {
    // 関数の本体
    // パラメーターを使った処理など
    return result; // 返り値があればreturn文で返す
}`;
  jscodeBlock37.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock38 = document.getElementById('jscodeBlock38');
  const codeString =
  `const greet = function(name) {
    console.log("Hello, " + name + "!");
};
greet("Alice"); // "Hello, Alice!"
`;
  jscodeBlock38.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock39 = document.getElementById('jscodeBlock39');
  const codeString =
  `const functionName = (parameter1, parameter2) => {
    // 関数の本体
    return result;
};`;
  jscodeBlock39.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock40 = document.getElementById('jscodeBlock40');
  const codeString =
  `function performOperation(callback) {
    // 処理
    callback(); // コールバック関数の呼び出し
  }`;
  jscodeBlock40.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock41 = document.getElementById('jscodeBlock41');
  const codeString =
  `let message = "Hello, world!";
   console.log(message);`;
  jscodeBlock41.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const jscodeBlock42 = document.getElementById('jscodeBlock42');
  const codeString =
  `function greet(name) {
    console.log("Hello, " + name + "!");
  }
    greet("Alice"); // "Hello, Alice!"
`;
  jscodeBlock42.innerHTML = codeString;
});