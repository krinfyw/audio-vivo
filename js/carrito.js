const botonesCarrito = document.querySelectorAll(".btn-comprar");
const contador = document.querySelector("#contador-carrito");
let listaCarrito;

if (localStorage.getItem("carrito") != null){
    listaCarrito = JSON.parse(localStorage.getItem("carrito"));
}else{
    listaCarrito = [];
}

contador.textContent = listaCarrito.length;

botonesCarrito.forEach(function(boton){
    boton.addEventListener("click", function(e){
        const nombreProducto = boton.parentElement.querySelector("h3").textContent;
        const precioProducto = boton.parentElement.querySelector(".precio").textContent;
        listaCarrito.push({nombre: nombreProducto, precio: precioProducto});
        localStorage.setItem("carrito", JSON.stringify(listaCarrito));
        contador.textContent = listaCarrito.length;
        console.log("Producto agregado", nombreProducto, precioProducto);
    });
});
