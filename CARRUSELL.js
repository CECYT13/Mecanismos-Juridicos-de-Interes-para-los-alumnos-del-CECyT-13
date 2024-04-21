var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

// Función para mostrar los slides
function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
}

// Función para cambiar manualmente los slides
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
}