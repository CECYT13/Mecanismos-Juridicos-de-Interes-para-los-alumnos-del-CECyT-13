document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var images = document.querySelectorAll("#DIVIMG");
    
    function showImage(index) {
    for (var i = 0; i < images.length; i++) {
    if (i === index) {
    images[i].style.opacity = 1;
    } else {
    images[i].style.opacity = 0;
    }
    }
    }
    
    function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    }
    
    // Mostrar la primera imagen al cargar la página
    showImage(currentIndex);
    
    // Cambiar la imagen cada 5 segundos
    setInterval(nextImage, 5000);
    });
