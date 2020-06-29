import { uploadImagePerfil, addPost, signOutSession } from '../view-controller/home-controller.js';

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
       <!--    <ul id="ulPosts"></ul> -->
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
    //cargar archivo seleccionado
    const dataURL = reader.result;
    profilePhoto.src = dataURL;
  };
  reader.readAsDataURL(file);
  
  //Subir archivo al firebase
  uploadImagePerfil( file);

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
    //cargar archivo seleccionado
    const dataURL = reader.result;
    imgPost.src = dataURL;
  };
  reader.readAsDataURL(file);

});

btnPost.addEventListener('click', () => {
  const statusPrivacy = document.getElementById('ddlStatusPrivacy').value;
  const textPost = document.getElementById('txtPost').value;

  if (textPost.length > 0) {
   
    //Verificamos si han subido archivo. `${window.origin}/` => 'http://localhost:5000/'
    let img = imgPost.src == (`${window.origin}/`)? "" : imgPost.src;
    
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

    //  console.log(post);

    const div = document.createElement('div');
    const pNombre = document.createElement('p');
    const txtPost = document.createElement('textarea');
    const img = document.createElement('img');

    div.setAttribute("id", post.id);
    pNombre.innerHTML = post.userName;
    txtPost.innerHTML = post.text;
    img.src = post.imageContent;

    div.appendChild(pNombre);
    div.appendChild(txtPost);
    div.appendChild(img);
    
    // console.log(post.imageUrl);
     console.log(div);
    container_post.appendChild(div);

    //  if(post.imageUrl){
    //   img.src = post.imageUrl;
    // } 

  
    // liNombre.appendChild(textNombre);
    // ulPosts.appendChild(liNombre);
    // ulPosts.appendChild(img);

});


  // /loadAllPosts();
  return viewHome;
};
