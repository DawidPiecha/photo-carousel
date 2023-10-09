const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const slideNumber = document.querySelector(".slide-number");
let currentSlideIndex = 0;

// Funkcja do wyświetlania aktualnego slajdu
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
  const currentSlideNumber = index + 1; // Indeksujemy od 0, więc dodajemy 1
  const totalSlides = slides.length;
  slideNumber.textContent = `${currentSlideNumber}/${totalSlides}`;
}

// Funkcja do przełączania na poprzedni slajd
function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
}

// Funkcja do przełączania na następny slajd
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

// Obsługa kliknięć przycisków prev i next
prevBtn.addEventListener("click", prevSlide);

nextBtn.addEventListener("click", nextSlide);

showSlide(currentSlideIndex); //to wywołanie jest potrzebne aby wyświetlić pierwszy slajd i licznik slajdów pod zdjęciem po załadowaniu strony
