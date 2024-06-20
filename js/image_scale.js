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