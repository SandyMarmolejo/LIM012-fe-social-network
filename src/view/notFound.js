export default () => {
    const viewNotFound = document.createElement('div');
    viewNotFound.classList.add('mistake');
    viewNotFound.innerHTML = `
    <div class="mistake">
        <div class="body-mistake">
          <h2>Oops!, Pagina no encontrada...</h2>
          <P>Se produjo un error inesperado. </P>
        </div>
        
         <img src="../css/images/notfound.jpg" alt="">   
        
         <div>
         
    </div>
       
            `;
  
    return viewNotFound;
  };