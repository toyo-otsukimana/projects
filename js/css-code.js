// script.js
document.addEventListener('DOMContentLoaded', function() {
  const codeBlock = document.getElementById('cssCodeBlock1');
  const codeString = 
  `div {
  height: 100px;
  width:  100px;
}

.class-name {

}

#id-name {

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