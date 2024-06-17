// script.js
document.addEventListener('DOMContentLoaded', function() {
  const codeBlock = document.getElementById('cssCodeBlock1');
  const codeString = 
  `div {
  height: auto;
  width:  1000px;
}

.class-name {
  display: block;
  margin:  auto;
  border:  1px solid red;
  padding: 10px 5px 15px 5px;
  background-coler: #ffffff;
}

#id-name {
  color: red
  font-size: 24px;
  font-weight: 1000;
  font-family: "游明朝";
  text-decoration: underline;
}
`
;

  codeBlock.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const codeBlock = document.getElementById('cssCodeBlock2');
  const codeString = 
  `div <span>{
  height: 100px;
  width:  100px;
}</span>`
;
  codeBlock.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const codeBlock = document.getElementById('cssCodeBlock3');
  const codeString = 
  `<span>div</span>{
  height: 100px;
  width:  100px;
}`
;
  codeBlock.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const codeBlock = document.getElementById('cssCodeBlock4');
  const codeString = 
  `div{
  <span>height</span>: 100px;
  <span>width</span>:  100px;
}`
;
  codeBlock.innerHTML = codeString;
});

document.addEventListener('DOMContentLoaded', function() {
  const codeBlock = document.getElementById('cssCodeBlock5');
  const codeString = 
  `div{
  height: <span>100px</span>;
  width:  <span>100px</span>;
}`
;
  codeBlock.innerHTML = codeString;
});