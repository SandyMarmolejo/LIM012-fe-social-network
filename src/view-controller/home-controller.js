import { getUserInfo } from './login-controller.js';
import { updateUserImage, publishPost, updatePost } from '../firebase-controller/firestore-controller.js';
import { nameImage, storage_perfil, dataURLtoFile, storage_post } from '../util/util.js';
import { storageRef, put } from '../firebase-controller/storage-controller.js';
import { signOut } from '../firebase-controller/auth-controller.js';
import { changeView } from '../view-controller/route-controller.js';

export const uploadImagePerfil = (blob) => {
  //obtener usuario del localstorage
  let idUsuario = localStorage.getItem("idUser");

  /******** subir imagen a Firebase *******/
  const imgstorageRef = `${storage_perfil}/${nameImage()}.jpg`;
  const refStorage = storageRef(imgstorageRef);

  console.log(blob);
  put(refStorage, blob).then((snapshot) => {

    /******** cambiar ruta image en base datos *******/
    updateUserImage(idUsuario, snapshot.metadata.fullPath);
    /******** cambiar datos del localstorage *******/
    getUserInfo();
  });
}

export const uploadImagePost = (url) => {

  let nameFile = `${nameImage()}.jpg`;
  const imgstorageRef = `${storage_post}/${nameFile}`;

  let file = dataURLtoFile(url, nameFile);

  /******** subir imagen a Firebase *******/
  const refStorage = storageRef(imgstorageRef);

  return put(refStorage, file);
}

export const addPost = (userName, statusPrivacy, textPost, urlImage) => {
  let idUsuario = localStorage.getItem("idUser");
  return publishPost(idUsuario, userName, textPost, urlImage, new Date().toLocaleString(), statusPrivacy);
};

// Actualizar los likes en post, retorna una promesa
export const updateLike = (id, post) => {
  return updatePost(id, post);
};

export const updateComment = (id, post) => {
  return updatePost(id, post);
};

export const signOutSession = () => signOut().then(() => changeView('#/login'));