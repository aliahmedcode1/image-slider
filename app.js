const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function hideAllSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
}

function showSlide() {
    hideAllSlides();
    slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
    currentSlide += n;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide();
}

showSlide();
