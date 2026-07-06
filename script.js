const productos = [
  { nombre: "Arroz Blanco (2LB)", precio: 1.45 },
  { nombre: "Arroz Precocido (2LB)", precio: 1.55 },
  { nombre: "Frijol de Seda (2LB)", precio: 2.40 },
  { nombre: "Cartón de Huevos (30)", precio: 5.50 },
  { nombre: "Maní Japonés", precio: 0.30 },
  { nombre: "Maní Dulce", precio: 0.30 },
  { nombre: "Maní Salado", precio: 0.30 },
  { nombre: "Licuado de Fresa", precio: 1.50 },
  { nombre: "Licuado de Banana", precio: 1.25 },
  { nombre: "Licuado Base Agua", precio: 1.75 },
  { nombre: "Chocobanano", precio: 0.50 }
];

let carrito = [];

const contenedor = document.getElementById("productos");

productos.forEach(producto => {
  contenedor.innerHTML += `
    <div class="producto">
      <h3>${producto.nombre}</h3>
      <p><strong>$${producto.precio.toFixed(2)}</strong></p>
      <button onclick="agregar('${producto.nombre}', ${producto.precio})">
        Agregar
      </button>
    </div>
  `;
});

function agregar(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  let total = 0;

  carrito.forEach(item => {
    total += item.precio;
    lista.innerHTML += `<li>${item.nombre} - $${item.precio.toFixed(2)}</li>`;
  });

  document.getElementById("total").innerHTML =
    "Total: $" + total.toFixed(2);
}

function enviarPedido() {
  if (carrito.length === 0) {
    alert("Agrega al menos un producto.");
    return;
  }

  let mensaje = "Hola 😊 Quiero realizar este pedido:%0A%0A";

  carrito.forEach(item => {
    mensaje += "• " + item.nombre + " - $" + item.precio.toFixed(2) + "%0A";
  });

  mensaje += "%0ATotal: " +
    document.getElementById("total").innerText.replace("Total: ", "");

  window.open(
    "https://wa.me/50375990035?text=" + mensaje,
    "_blank"
  );
}
