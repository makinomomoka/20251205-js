const images = document.querySelectorAll('.marquee-inner-stop img');
const marqueeInners = document.querySelectorAll('.marquee-inner-stop');

images.forEach(img => {
    img.addEventListener('mouseenter', () => {
        marqueeInners.forEach(marqueeInner => {
            marqueeInner.classList.add('marquee-paused');
        });
    });

    img.addEventListener('mouseleave', () => {
        marqueeInners.forEach(marqueeInner => {
            marqueeInner.classList.remove('marquee-paused');
        });
    });
});