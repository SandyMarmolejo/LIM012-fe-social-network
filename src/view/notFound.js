
const notFound = () => {
  const viewNotFound = `
        <div class="mistake">
        <div class="body-mistake">
          <h2>Oops!, Pagina no encontrada...</h2>
          <P>Se produjo un error inesperado. </P>
        </div>
        
         <img src="../css/images/notfound.jpg" alt="">   
        
         <div>
         
    </div>
    `;
  // Creando un elemento nodo de tipo div
  const divNotFound = document.createElement('div');
  // Añadimos una cadena de texto
  divNotFound.innerHTML = viewNotFound;

  return divNotFound;
};

export default notFound;

