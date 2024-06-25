// script.js
document.addEventListener('DOMContentLoaded', function() {
  const codeBlock = document.getElementById('codeBlock');
  const codeString = 
`&lt;!DOCTYPE html&gt;
&lt;html lang="ja"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;ページのタイトル&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;見出し&lt;/h1&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;p&gt;ここに本文を書きます。&lt;/p&gt;
    &lt;/main&gt;
    &lt;footer&gt;
        &lt;p&gt;フッターの内容&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;`;

  codeBlock.innerHTML = codeString;
});
