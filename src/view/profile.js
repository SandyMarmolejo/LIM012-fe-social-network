

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


  //  const createProfileInfo = (id) => {
  //   firebase.firestore().collection('users').doc(id).set({
  //     aboutMe: 'Cuenta un poco sobre ti',
  //     location: 'Ciudad, País',
  //   });
  // };

  //  const getProfileInfo = userId => firebase.firestore().collection('users').doc(userId).get();

  // export const updateProfileInfo = (userId, description, place) => firebase.firestore().collection('users').doc(userId).update({
  //   aboutMe: description,
  //   location: place,
  // });
};

// Creacion de los comentarios en los post publicados

// const publishComment = (userName, comment, idPost, date, userId) => firebase.firestore().collection('comments').add({
//   user: userName,
//   comment: comment,
//   idPost: idPost,
//   time: date,
//   userId: userId,
// });

// const getAllComments = (callback, id) => firebase.firestore().collection('comments')
//   .where('idPost', '==', id)
//   .orderBy('time', 'asc')
//   .onSnapshot((querySnapshot) => {
//     const allComments = [];
//     querySnapshot.forEach((doc) => {
//       allComments.push({ id: doc.id, ...doc.data() });
//     });
//     callback(allComments);
//   });

// export const updateComment = (id, comment) => firebase.firestore().collection('comments').doc(id).update({ comment: comment });
