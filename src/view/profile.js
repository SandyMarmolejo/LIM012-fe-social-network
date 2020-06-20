

const profile = () => {
    const viewProfile = `
    <div class="contenedor">
  <header class="header">
    <nav>
      <a href="#" class="profile-menu" id="profileMenu">Perfil</a>
      <button class="btnSignOut" id="btnSignOut" href="#/login">Cerrar sesión</i>
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
    <textarea rows="4" cols="50" placeholder="¿Qué quieres compartir?"></textarea>

      <div class="profile-edit">
      <button id="btnCancel" class="btn-profile-cancel hide">Cancelar</button>
      <button id="btnSave" class="btn-profile-save hide">Guardar</button>
      </div>
    </div>
  </aside>
</div>`;

// Creando un elemento nodo de tipo div
const divProfile = document.createElement('div');
// Añadimos una cadena de texto
divProfile.innerHTML = viewProfile;
divProfile.classList.add('profile');

}

