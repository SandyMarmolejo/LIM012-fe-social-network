const notFound = () => {
  const viewNotFound = `
        <p class="not-found-number">404</p>
        <p class="not-fund-text">Página no encontrada</p>;
    `;
  // Creando un elemento nodo de tipo div
  const divNotFound = document.createElement('div');
  // Añadimos una cadena de texto
  divNotFound.innerHTML = viewNotFound;

  return divNotFound;
};

export default notFound;
