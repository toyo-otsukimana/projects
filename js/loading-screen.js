/* =================================================== */
// ローディング画面の表示・非表示を制御する
/* =================================================== */

document.addEventListener("DOMContentLoaded", function() {
  // ページが完全にローディングされたらローディング画面を非表示にする
  window.onload = function() {
    let loadingScreen = document.getElementById("loading-screen");

    // ローディング画面を3秒間表示する
    setTimeout(function() {
      // フェードアウト処理
      loadingScreen.style.transition = "opacity 1s ease-out";
      loadingScreen.style.opacity = 0;
      
      // 1秒後にdisplayをnoneにする
      setTimeout(function() {
        loadingScreen.style.display = "none";
      }, 1000); // 1秒間でフェードアウトする。
    }, 1500);   // 3→1.5秒間表示し、その後フェードアウト処理を実行する
  }
});