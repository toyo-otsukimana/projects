// スクロールトップボタン
scrollTop('js-scroll-top', 150); 

function scrollTop(el, duration) {
  const target = document.getElementById(el);
  target.addEventListener('click', function() {
    let currentY = window.pageYOffset; 
    let step = duration/currentY > 1 ? 10 : 100; 
    let timeStep = duration/currentY * step;
    let intervalId = setInterval(scrollUp, timeStep);

    function scrollUp(){
      currentY = window.pageYOffset;
      if(currentY === 0) {
          clearInterval(intervalId); 
      } else {
          scrollBy( 0, -step );
      }
    }
  });
}

// スムーススクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
smoothScrollTrigger.forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const href = anchor.getAttribute('href');
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    }
  });
});

// 画像拡大
const modal = document.getElementById('modal-container');
const images = document.querySelectorAll('img.development-image');

modal.addEventListener('click', function() {
  modal.style.display = 'none';
}, false);

images.forEach(function(image) {
  image.addEventListener('click', function() {
    const modalImage = modal.querySelector('img'); 
    modalImage.src = image.src; 
    modal.style.display = 'flex'; 
  });
});