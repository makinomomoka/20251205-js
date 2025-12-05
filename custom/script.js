const mainImg = document.querySelector('.gallery-main img');
const thumbnails = document.querySelectorAll('.gallery-thumbnail img');

thumbnails.forEach((thumb) => {
    thumb.addEventListener('click',(event) => {
        thumb.style.transition = 'translate 0.2s ease, background-color 0.2s ease';
        mainImg.style.translate = '0 -10px';        
        mainImg.style.transition = 'translate 0.2s ease, background-color 0.2s ease';
        thumb.style.translate = '0 -10px';        
        mainImg.src = event.target.src;
        mainImg.animate( {opacity: [0, 1]}, 500 );

        setTimeout(() => thumb.style.translate = '0', 200);
        setTimeout(() => mainImg.style.translate = '0', 200);
    });
});