/* eslint-disable import/no-cycle */
import {
  signIn, logInGoogle, verificationEmail,
} from './auth.js';
import { validation } from './validacion.js';


export const signingIn = (emailLogIn, passwordLogIn) => {
  signIn(emailLogIn, passwordLogIn).then(() => {
    console.log('validar correo');


    validation();
    CargarImagenTest();
  }).catch((err) => {
    console.log(err);
  });
};


export const signingInGoogle = () => {
  logInGoogle().then((result) => {
    console.log(result);
    CargarImagenTest();


    //   getUser(result.user.uid).then((doc) => {
    //     if (!doc.exists) {
    //       createProfileInfo(result.user.uid);
    //     }
    //   });
  });
};


const CargarImagenTest = () => {
  // var  storageRef  = firebase.storage().ref().child("imagenes/tow1.png");
  const storageRef = firebase.storage().ref().child('PIC_20180218_0405.jpg');


  storageRef.getDownloadURL().then((url) => {
    console.log(url);

    // Descargar imagen
    // var xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = function(event) {
    //   var blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();

    // console.log(xhr);


    const img = document.getElementById('img_log');
    img.src = url;
  }).catch((error) => {
    console.log(error);
  });
};
