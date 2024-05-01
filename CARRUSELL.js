var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

// Función para mostrar los slides
function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "block";  
}

// Iniciar el cambio automático de slides cada 3 segundos
var timer = setInterval(showSlides, 3000);

// Función para cambiar manualmente los slides
function plusSlides(n) {
  clearInterval(timer); // Detener el cambio automático al cambiar manualmente
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
  // Reanudar el cambio automático después de 3 segundos
  timer = setInterval(showSlides, 3000);
}