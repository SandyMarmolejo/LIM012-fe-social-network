const notFound = () => {
  const viewNotFound = `
<div class="mistake">
  <div class="body-mistake">
    <h2>Oops!, Pagina no encontrada...</h2>
    <p>Se produjo un error inesperado. </p>
  </div>
  <img src="../images/notfound.jpg" alt="">
</div>
  `;

  // Creando un elemento nodo de tipo div
  const divNotFound = document.createElement('div');
  // Añadimos una cadena de texto
  divNotFound.innerHTML = viewNotFound;

  return divNotFound;
};

export default notFound;
