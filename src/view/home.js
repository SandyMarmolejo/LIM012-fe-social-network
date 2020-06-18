export default () => {
  const viewHome = document.createElement('div');
  viewHome.classList.add('home');
  viewHome.innerHTML = `
    
  <div class="contenedor">
<header class="header">
    <a href="#" class="barra" id="perfil">Perfil</a>
</header>
<main class="contenido">
<h1>Contenido</h1>
<
</main>
<aside class="sidebar">
<h3>cajita de post</h3>
</aside>


</div>  
          `;
  // cerra sesión
  /* const btnSignOut = viewHome.querySelector('#btnSignOut');
  btnSignOut.addEventListener('click', () => firebase.auth().signOut()); */
  return viewHome;
};
