import { changeView } from '../view-controller/route-controller.js';
import { user } from '../firebase-controller/auth-controller.js';

export default () => {
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
        <option value="Pu">Público</option>
        <option value="Pr">Privado</option>
      </select>
      <p>
      <button id="btnSelectImage" class="select-image"></button>
      </p>
      <p>
      <button id="btnPost" class="btn-post-submit">Compartir</button>
      </p>
      <ul id="ulPosts"></ul>
    </div>
  </aside>
</div>`;


// cerrar sesión
const btnSignOut = viewHome.querySelector('#btnSignOut');
btnSignOut.addEventListener('click', () => {
  firebase.auth().signOut().then(() => {
    changeView('#/login');
  });
});

const btnPost = viewHome.querySelector('#btnPost');
btnPost.addEventListener('click', () => {

 const statusPrivacy = document.getElementById("ddlStatusPrivacy").value;
 const post = document.getElementById("txtPost").value;

 if(post.length > 0) {
  const currentUser = user();
  var postJson = {
    userId: currentUser.uid,
    userName: userName,
    statusPrivacy: statusPrivacy,
    post: post
  };
 
  firebase.firestore().collection('posts').add(postJson).then(() => {
   document.getElementById("txtPost").value = "";

 firebase.firestore().collection('posts')
.onSnapshot((posts) => {
  const allPosts = [];
  posts.forEach((post) => {
    allPosts.push(post.data());
  });

  const ulPosts = viewHome.querySelector('#ulPosts')

  allPosts.forEach((post) =>{
    const liNombre = document.createElement('li');
        const textNombre = document.createTextNode(post.post);
        liNombre.appendChild(textNombre);
        ulPosts.appendChild(liNombre);
  })

 
});

  });
 }else {
   alert('Completar texto para compartir');
 }

})

return viewHome;
};

//tareas a investigar
//como publicar un post en firebase 
//como editar post
//como agregar imagen a post
//como eliminar un post en firebase
//como añadir comentarios en post
//como ver todos posts publicos y privados 
//editar perfil 