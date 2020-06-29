import { getUserInfo} from './login-controller.js';
import { updateUserImage, publishPost } from '../firebase-controller/firestore-controller.js';
import { nameImage, storage_perfil, dataURLtoFile, storage_post } from '../util/util.js';
import { storageRef, put } from '../firebase-controller/storage-controller.js';
import { signOut } from '../firebase-controller/auth-controller.js';
import {changeView} from '../view-controller/route.js';
import { user } from '../firebase-controller/auth-controller.js';


export const uploadImagePerfil = ( blob ) => {

  // console.log('blob',blob);

  //obtener usuario del localstorage
  let idUsuario = localStorage.getItem("idUser");
  // console.log('idUsuario',idUsuario);

  /******** subir imagen a Firebase *******/

  const imgstorageRef = `${storage_perfil}/${nameImage()}.jpg`;
  const refStorage = storageRef(imgstorageRef);

  console.log(blob);
  put(refStorage, blob).then((snapshot) => {
  
    /******** cambiar ruta image en base datos *******/
    updateUserImage( idUsuario, snapshot.metadata.fullPath );
    /******** cambiar datos del localstorage *******/
    getUserInfo();

  }); 

}

export const uploadImagePost = ( url ) => {

  let nameFile = `${nameImage()}.jpg`;
  const imgstorageRef = `${storage_post}/${nameFile}`;

  let file  = dataURLtoFile(url, nameFile);

  /******** subir imagen a Firebase *******/
  const refStorage = storageRef(imgstorageRef);

  return put(refStorage, file);

}


export const addPost = (userName, statusPrivacy, textPost, urlImage) => {
   
  let idUsuario = localStorage.getItem("idUser");
  
  return publishPost(idUsuario, userName, textPost, urlImage , new Date().toLocaleString(), statusPrivacy);
  // if (urlImage){
  //   return uploadImagePost(urlImage).then((snapshot) => {
  //     console.log('subir imagen'); 
  //     console.log(snapshot);
  //     publishPost(idUsuario, userName, textPost, snapshot.metadata.fullPath , new Date().toLocaleString(), statusPrivacy);
  
  //   });
  // }
  // else {
  //   return publishPost(idUsuario, userName, textPost, "" , new Date().toLocaleString(), statusPrivacy);
  // } 
};

  
export const signOutSession = () => signOut(). then(() => changeView('#/login'));
