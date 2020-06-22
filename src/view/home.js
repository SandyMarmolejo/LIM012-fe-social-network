import { changeView } from '../view-controller/route-controller.js';
import { user } from '../firebase-controller/auth-controller.js';
import { addPost, signOut } from '../view-controller/home-controller.js';

export default (posts) => {
  const userName = localStorage.getItem('fullName');
  const userPhoto = localStorage.getItem('userPhoto');
  const aboutMe = localStorage.getItem('aboutMe');
  const location = localStorage.getItem('location');

  const viewHome = document.createElement('div');
  viewHome.classList.add('home');
  viewHome.innerHTML = `
<div class="contenedor">
  <header class="header">
    <nav>
      <a href="#" class="profile-menu" id="profileMenu">Perfil</a>
      <button class="btnSignOut" id="btnSignOut">Cerrar sesión</i>
    </nav>
  </header>
  <main class="contenido">
    <div id="profileInfo">
    <p class="user-name">${userName}</p>
    <img id="profilePhoto" class="img-user" src="${userPhoto || './images/avatardefaultblack.png'}" alt="">
    <p class="user-name">${aboutMe}</p>
    <p class="user-name">${location}</p>
    </div>
  </main>
  <aside class="sidebar">
    <textarea id="txtPost" rows="4" cols="50" placeholder="¿Qué quieres compartir?"></textarea>
    <div class="content-privacy">
      <select id="ddlStatusPrivacy">
        <option id="public" value="public">Público</option>
        <option id="private "value="private">Privado</option>
      </select>
      <p>
      <input type="file" id="txtFile"/>
      <button id="btnPost" class="btn-post-submit">Compartir</button>
      <ul id="ulPosts"></ul>
      </p>
    </div>
  </aside>
</div>`;

  const ulPosts = viewHome.querySelector('#ulPosts');
  ulPosts.innerHTML = '';

  posts.forEach((post) => {
    const liNombre = document.createElement('li');
    const textNombre = document.createTextNode(post.text);

    /* if(post.imagePath !== ''){
  const img = document.createElement('img');
} */

    liNombre.appendChild(textNombre);
    ulPosts.appendChild(liNombre);
  });

  // cerrar sesión
  const btnSignOut = viewHome.querySelector('#btnSignOut');

  btnSignOut.addEventListener('click', () => {
    signOut().then(() => {
      changeView('#/login');
    });
  });

  const btnPost = viewHome.querySelector('#btnPost');
  btnPost.addEventListener('click', () => {
    const statusPrivacy = document.getElementById('ddlStatusPrivacy').value;
    const textPost = document.getElementById('txtPost').value;

    if (textPost.length > 0) {
      addPost(userName, statusPrivacy, textPost, '').then(() => {
        document.getElementById('txtPost').value = '';
      });
    } else {
      alert('Completar texto para compartir');
    }
  });

  // /loadAllPosts();
  return viewHome;
};
