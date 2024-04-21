window.addEventListener('scroll', function() {
    var miDiv = document.getElementById('miDiv');
    if (window.scrollY > 50) { // Cambia este valor según sea necesario para activar el movimiento
        miDiv.classList.add('scroll-down');
    } else {
        miDiv.classList.remove('scroll-down');
    }
});