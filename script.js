import { crearTarjeta } from "./card.js";

const fetchProducts = async () => {
  const response = await fetch('./productos.json');
  return await response.json();
}

async function crearTarjetas() {
  const contenedor = document.getElementById('contenedor-productos');
  const productos = await fetchProducts();
  let acumulador = '';

  productos.forEach(producto => acumulador += crearTarjeta(producto));
  contenedor.innerHTML = acumulador;

}

crearTarjetas()