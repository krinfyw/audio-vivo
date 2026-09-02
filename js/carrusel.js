let flechaIzquierda = document.getElementById('btn-izq');
let flechaDerecha = document.getElementById('btn-der');
let categorias = document.getElementById('categorias');

const desplazamiento = 270;

// Botón Derecho
flechaDerecha.addEventListener('click', () => {
    const scrollRestante = categorias.scrollWidth - categorias.clientWidth - categorias.scrollLeft;
    /*Si llego al final vuelve al inicio*/
    if (scrollRestante <= 50) {
        categorias.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        categorias.scrollBy({ left: desplazamiento, behavior: 'smooth' });
    }
});

// Botón Izquierdo
flechaIzquierda.addEventListener('click', () => {
    /*Del inicio salta al final*/
    if (categorias.scrollLeft <= 20) {
        categorias.scrollTo({ left: categorias.scrollWidth, behavior: 'smooth' });
    } else {
        categorias.scrollBy({ left: -desplazamiento, behavior: 'smooth' });
    }
});

