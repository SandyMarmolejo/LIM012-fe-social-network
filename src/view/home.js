import {
  uploadImagePerfil, addPost, updateLike, updateComment, signOutSession,
} from '../view-controller/home-controller.js';
import { user } from '../firebase-controller/auth-controller.js';

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
      <input type="submit" value="Cambiar Foto" id="btnImagePerfil">
      <input type="file" id="inputImagePerfil" style="display:none;"/>
      <p class="user-name">${aboutMe}</p>
      <p class="user-name">${location}</p>
    </div>
  </main>
  <aside class="sidebar">
    
    <textarea id="txtPost" rows="4" cols="50" placeholder="¿Qué quieres compartir?"></textarea>
    
    
    <img id="imgPost" class="img-user" src="" alt="" style ="width: 200px; height: 250px;">
    
    <div class="content-privacy">
      <select id="ddlStatusPrivacy">
        <option id="public" value="public">Público</option>
        <option id="private "value="private">Privado</option>
      </select>
      <p>
       

        <input type="submit" value="Subir Foto" id="btnImagePost">
        <input type="file" id="inputImagePost" style="display:none;"/>

        <button id="btnPost" class="btn-post-submit">Compartir</button>
      </p>
    </div>
  </aside>
  <div id="container_post">
  </div>
</div>`;

  const btnImagePerfil = viewHome.querySelector('#btnImagePerfil');
  const inputImagePerfil = viewHome.querySelector('#inputImagePerfil');
  const profilePhoto = viewHome.querySelector('#profilePhoto');
  const btnImagePost = viewHome.querySelector('#btnImagePost');
  const inputImagePost = viewHome.querySelector('#inputImagePost');
  const imgPost = viewHome.querySelector('#imgPost');

  // cerrar sesión
  const btnSignOut = viewHome.querySelector('#btnSignOut');
  const btnPost = viewHome.querySelector('#btnPost');

  // const ulPosts = viewHome.querySelector('#ulPosts');
  const container_post = viewHome.querySelector('#container_post');

  btnSignOut.addEventListener('click', () => {
    signOutSession();
  });

  btnImagePerfil.addEventListener('click', () => {
    // Ejecutamos el metodo Click de input type
    inputImagePerfil.click();
  });

  inputImagePerfil.addEventListener('change', (e) => {
    // obtener archivo seleccionado
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      // cargar archivo seleccionado
      const dataURL = reader.result;
      profilePhoto.src = dataURL;
    };
    reader.readAsDataURL(file);

    // Subir archivo al firebase
    uploadImagePerfil(file);
  });

  btnImagePost.addEventListener('click', () => {
    // Ejecutamos el metodo Click de input type
    inputImagePost.click();
  });

  inputImagePost.addEventListener('change', (e) => {
    // obtener archivo seleccionado
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      // cargar archivo seleccionado
      const dataURL = reader.result;
      imgPost.src = dataURL;
    };
    reader.readAsDataURL(file);
  });

  btnPost.addEventListener('click', () => {
    const statusPrivacy = document.getElementById('ddlStatusPrivacy').value;
    const textPost = document.getElementById('txtPost').value;

    if (textPost.length > 0) {
      // Verificamos si han subido archivo. `${window.origin}/` => 'http://localhost:5000/'
      const img = imgPost.src == (`${window.origin}/`) ? '' : imgPost.src;

      addPost(userName, statusPrivacy, textPost, img).then(() => {
        console.log('inserto comentario');
        document.getElementById('txtPost').value = '';
      });
    } else {
      alert('Completar texto para compartir');
    }
  });


  container_post.innerHTML = '';
  posts.forEach((post) => {
    const div = document.createElement('div');
    div.setAttribute('id', post.id);
    div.classList.add('divPost');

    const pNombre = document.createElement('p');
    pNombre.innerHTML = post.userName;

    if (post.statusPrivacy === 'private') {
      pNombre.innerHTML = `${post.userName}(Privado)`;
    }

    const pPublishDate = document.createElement('p');
    pPublishDate.innerHTML = post.publishTime;

    const txtPost = document.createElement('textarea');
    const img = document.createElement('img');
    txtPost.innerHTML = post.text;
    img.src = post.imageContent;

    const btnAddLike = document.createElement('BUTTON');
    btnAddLike.innerHTML = 'Me gusta';

    var userLikes = post.likes.filter(like => like == user().uid);

    if (userLikes.length === 0) {
      btnAddLike.onclick = () => {
        post.likes.push(user().uid);
        updateLike(post.id, post);
      };
    } else {
      btnAddLike.disabled = true;
    }

    const lblLikes = document.createElement('LABEL');
    const numberLikes = document.createTextNode(`${post.likes.length} likes`);
    lblLikes.appendChild(numberLikes);

    const txtNewComment = document.createElement('INPUT');
    txtNewComment.setAttribute('type', 'text');
    txtNewComment.setAttribute('id', `txt${post.id}`);
    txtNewComment.placeholder = 'Comenta aqui';

    const btnAddComment = document.createElement('BUTTON');
    btnAddComment.innerHTML = 'Comentario';
    btnAddComment.onclick = () => {
      const txtCommentValue = document.getElementById(`txt${post.id}`).value;

      const comment = {
        userId: user().uid,
        userName,
        text: txtCommentValue,
      };

      post.comments.push(comment);
      updateComment(post.id, post);
    };

    const ulComments = document.createElement('ul');
    post.comments.forEach((comment) => {
      const liComment = document.createElement('li');

      const pCommentNombre = document.createElement('p');
      pCommentNombre.innerHTML = comment.userName;

      const txtComment = document.createTextNode(comment.text);
      liComment.appendChild(pCommentNombre);
      liComment.appendChild(txtComment);
      ulComments.appendChild(liComment);
    });

    div.appendChild(pNombre);
    div.appendChild(pPublishDate);
    div.appendChild(txtPost);
    div.appendChild(img);
    div.appendChild(btnAddLike);
    div.appendChild(lblLikes);
    div.appendChild(txtNewComment);
    div.appendChild(btnAddComment);
    div.appendChild(ulComments);
    container_post.appendChild(div);
  });

  return viewHome;
};
