let flechaIzquierda = document.getElementById('btn-izq');
let flechaDerecha = document.getElementById('btn-der');
let categorias = document.getElementById('categorias');

flechaIzquierda.addEventListener('click', () => {
    categorias.scrollBy({
        left: -270,
        behavior: 'smooth'
    });
})

flechaDerecha.addEventListener('click', () => {
    categorias.scrollBy({
        left: 270,
        behavior: 'smooth'
    });
})