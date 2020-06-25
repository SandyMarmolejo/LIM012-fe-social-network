import { changeView } from '../view-controller/route-controller.js';
import { user } from '../firebase-controller/auth-controller.js';
import { addPost, signOut } from '../view-controller/home-controller.js';

export default (posts) => {
  // Almacenamiento local de datos y método que retorna el valor asociada con la lista asociada al obj
  const userName = localStorage.getItem('fullName');
  const userPhoto = localStorage.getItem('userPhoto');
  const aboutMe = localStorage.getItem('aboutMe');
  const location = localStorage.getItem('location');

  // Creando un elemento nodo de tipo div
  const viewHome = document.createElement('div');
  viewHome.classList.add('home');
  // Añadimos una cadena de texto
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
    <img id="imgPost" style="width:200px; height:100px;">
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
    const liPost = document.createElement('li');

    if (post.text.trim().length > 0) {
      const textPost = document.createTextNode(post.text);
      liPost.appendChild(textPost);
    }

    if (post.imageContent.length > 0) {
      const imagePost = document.createElement("IMG");
      imagePost.src = post.imageContent;
      liPost.appendChild(imagePost);
    }

    ulPosts.appendChild(liPost);
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
    const imageContent = document.getElementById('imgPost').src;

    if (textPost.trim().length > 0 || imageContent.trim().length > 0) {
      addPost(userName, statusPrivacy, textPost, imageContent).then(() => {
        document.getElementById('txtPost').value = '';
      });
    } else {
      alert('Completar texto para compartir');
    }
  });


  // Subiendo imagen

  const btnSelectFile = viewHome.querySelector('#txtFile');
  btnSelectFile.addEventListener('change', (e) => {
    const input = e.target;

    const reader = new FileReader();
    reader.onload = function () {
      const imageContent = reader.result;
      const imgPost = document.getElementById('imgPost');
      imgPost.src = imageContent;
    };

    reader.readAsDataURL(input.files[0]);
  });

  // /loadAllPosts();
  return viewHome;
};
