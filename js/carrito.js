const botonesCarrito = document.querySelectorAll(".btn-comprar");
const abrirCarrito = document.querySelector("#abrir-carrito");
const panelCarrito = document.querySelector("#carrito-total")
const contador = document.querySelector("#contador-carrito");
const listaCarritoUL = document.querySelector("#lista-carrito");
let listaCarrito;

function mostrarCarrito(){
    listaCarritoUL.innerHTML ="";
    let total = 0;
    listaCarrito.forEach(function(Producto){
        const item = document.createElement("li");
        const img = document.createElement("img");
        img.src = Producto.imagen || "";
        const texto = document.createElement("span");
        texto.textContent = Producto.nombre + " - " + Producto.precio;
        const btnQuitar = document.createElement("button");
        btnQuitar.textContent = "x";
        btnQuitar.addEventListener("click", function(){
            listaCarrito.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(listaCarrito));
            contador.textContent = listaCarrito.length;
            mostrarCarrito();
        });
        item.appendChild(img);
        item.appendChild(texto);
        item.appendChild(btnQuitar);
        listaCarritoUL.appendChild(item);
        const precioNumero = Number(Producto.precio.replace("$", "").replace(".", ""));
        total = total + precioNumero;
    });
    document.querySelector("#total-carrito").textContent = "total: $" + total;
}

const vaciarCarrito = document.querySelector("#vaciar-carrito");
vaciarCarrito.addEventListener("click", function(){
    listaCarrito = [];
    localStorage.setItem("carrito", JSON.stringify(listaCarrito));
    contador.textContent = listaCarrito.length;
    mostrarCarrito();
});

if (localStorage.getItem("carrito") != null){
    listaCarrito = JSON.parse(localStorage.getItem("carrito"));
}else{
    listaCarrito = [];
}

contador.textContent = listaCarrito.length;
mostrarCarrito();

botonesCarrito.forEach(function(boton){
    boton.addEventListener("click", function(e){
        const nombreProducto = boton.parentElement.querySelector("h3").textContent;
        const precioProducto = boton.parentElement.querySelector(".precio").textContent;
        const imagenProducto = boton.closest("article").querySelector(".img-producto").src;
        listaCarrito.push({nombre: nombreProducto, precio: precioProducto});
        localStorage.setItem("carrito", JSON.stringify(listaCarrito));
        contador.textContent = listaCarrito.length;
        mostrarCarrito();
    });
});

abrirCarrito.addEventListener("click", function(e){
    console.log("se hizo click")
    e.preventDefault();
    panelCarrito.classList.toggle("ocultar-carrito");
});

