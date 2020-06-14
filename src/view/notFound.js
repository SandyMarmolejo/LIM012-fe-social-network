export default () => {
    const viewNotFound = document.createElement('div');
    viewNotFound.classList.add('wrapper');
    viewNotFound.innerHTML = `
    <div class="mistake">
        <figure class ="container-mistake">
         <img src="./img/notfound.jpg" alt="">   
        </figure>
         <div>
          <div class="body-mistake">
              <h2>Oops!, Pagina no encontrada...</h2>
              <P>La página no existe o se produjo algún otro error. </P>
         </div>
    </div>
       
            `;
  
    return viewNotFound;
  };