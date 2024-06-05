window.addEventListener(("scroll"),()=>{
    document.querySelector("#Home h1").style.marginTop = `${window.scrollY * 1.5}px`
    document.querySelector("#Mountain1").style.marginBottom = `${106 - window.scrollY}px`
    document.querySelector("#leftCloud").style.marginLeft = `-${window.scrollY}px`
    document.querySelector("#mainCloud").style.marginTop = `-${window.scrollY}px`
    document.querySelector("#rightCloud").style.marginRight = `-${window.scrollY}px`
})

let currentIndex = 0;

    function showSlide(index) {
      const slides = document.querySelectorAll('.carousel-item');
      const totalSlides = slides.length / 3;
      const dots = document.querySelectorAll('.dot');
      if (index >= totalSlides) currentIndex = 0;
      if (index < 0) currentIndex = totalSlides - 1;
      const offset = -currentIndex * 100;
      document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    function nextSlide() {
      currentIndex++;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex--;
      showSlide(currentIndex);
    }

    function initCarousel() {
      const slides = document.querySelectorAll('.carousel-item');
      const dotsContainer = document.getElementById('carouselDots');
      for (let i = 0; i < Math.ceil(slides.length / 3); i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
          currentIndex = i;
          showSlide(currentIndex);
        });
        dotsContainer.appendChild(dot);
      }
      showSlide(currentIndex);
    }

    document.addEventListener('DOMContentLoaded', initCarousel);