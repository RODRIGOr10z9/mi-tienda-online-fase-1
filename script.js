const productos = [
    { id: 1, nombre: "PANTALONES", precio: 300 },
    { id: 2, nombre: "PLAYERAS", precio: 200 },
    { id: 3, nombre: "CAMIZAS", precio: 150 },
    { id: 4, nombre: "CHAMARRAS", precio: 600 },
    { id: 5, nombre: "ZAPATOS", precio: 700 },

    ];

const carrito = [];

function mostrarProductos() {
    const contenedor = document.getElementById("productos");
    productos.forEach(prod => {
        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `<h3>${prod.nombre}</h3><p>Precio: $${prod.precio}</p>
                         <button onclick="agregarAlCarrito(${prod.id})">Agregar</button>`;
        contenedor.appendChild(div);
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoLista = document.getElementById("carrito");
    carritoLista.innerHTML = "";
    carrito.forEach(p => {
        const item = document.createElement("li");
        item.textContent = `${p.nombre} - $${p.precio}`;
        carritoLista.appendChild(item);
    });
}

function checkout() {
    fetch('/comprar', { method: 'POST', body: JSON.stringify(carrito), headers: { 'Content-Type': 'application/json' } })
        .then(() => alert("Compra realizada"));
}

document.addEventListener("DOMContentLoaded", mostrarProductos);
