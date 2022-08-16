const crearTarjeta = ({titulo, precio, tamaño, img}) => {
  return `
  <div class="card">
  <h1>${titulo}</h1>
  <p>${precio}</p>
  <p>${tamaño}</p>
  <div><img src="./img/${img}"</div>

</div>
`
}

export { crearTarjeta }
