const slides = document.querySelectorAll('.slide');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const counter = document.querySelector('#counter');
let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === currentSlide;
    slide.hidden = !isActive;
    slide.classList.toggle('active', isActive);
  });
  counter.textContent = `${currentSlide + 1} / ${slides.length}`;
}

previous.addEventListener('click', () => showSlide(currentSlide - 1));
next.addEventListener('click', () => showSlide(currentSlide + 1));

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') showSlide(currentSlide - 1);
  if (event.key === 'ArrowRight') showSlide(currentSlide + 1);
});

setInterval(() => showSlide(currentSlide + 1), 1000);
