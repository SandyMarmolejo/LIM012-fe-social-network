

export default () => {
  const userName = localStorage.getItem('name');
  const userPhoto = localStorage.getItem('userphoto');
  const viewHome = document.createElement('div');
  viewHome.classList.add('home');
  viewHome.innerHTML = `    
  <div class="contenedor">
<header class="header">
    <a href="#" class="barra" id="perfil">Perfil</a>
    <button class="btnSignOut" id="btnSignOut" href="#/login">Cerrar sesión</i>
</header>
<main class="contenido">
    <p class="user-name">${userName}</p>
    <img class="img-user" src="${userPhoto}"/>
    <img src="./img/alternativa.png">
</main>
<aside class="sidebar">
<h3>cajita de post</h3>
<textarea rows="4" cols="50" placeholder="¿quieres compartir?"></textarea>
<button class="btn-primary" type="submit">Enviar</button>
</aside>
</div>`;

  // cerrar  sesión
  const btnSignOut = viewHome.querySelector('#btnSignOut');
  btnSignOut.addEventListener('click', () => firebase.auth().signOut());
  return viewHome;
};
