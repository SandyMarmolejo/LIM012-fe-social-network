import {  signIn, logInGoogle, validation,} from '../firebase-controller/auth-controller.js';
import { createProfileInfo, getUser } from '../firebase-controller/firestore-controller.js';
import { storageRef, put } from '../firebase-controller/storage-controller.js';
import { nameImage, getBlobByUrl,storage_perfil } from '../util/util.js';

import { changeView } from '../view-controller/route-controller.js';
import { getUserInfo } from '../view-controller/login-controller.js';


// Ingreso con usuario y contraseña
export const signingIn = (email, password) => 

  signIn(email, password).then(() => {
    console.log('logeo exitoso');
    // Verificar usuario correo
    validation( (result) => {
      if (result) {
        console.log('usuario verificado');
        // redireccionar a la pagina home
        getUserInfo().then(() => {
          changeView('#/home');
        });
      } 
      else {
        console.log('usuario no verificado');
        // Mostrar mensaje de usuario no verificado
        alert('Correo no verificado');
      }
    });
});

// Ingreso utilizando google
export const signingInGoogle = () => {
  logInGoogle().then((result) => {
    // console.log('logeo exitoso con google', result);

    // Verificar si el usuario esta registrado en la base de datos
    getUser(result.user.uid).then((user) => {
      //  console.log('user.exists', user);
      if (!user.exists) {
        //Si existe foto en cuenta de gmail, descargamos su foto para subirlo al firebase y creamos el usuario en la base de datos
        if (result.user.photoURL) {
          const imgstorageRef = `${storage_perfil}/${nameImage()}.jpg`;

          getBlobByUrl(result.user.photoURL)
            .then((blob) => {
              // console.log('blob',blob);
              const refStorage = storageRef(imgstorageRef);

              put(refStorage, blob).then((snapshot) => {
                // console.log('subio imagen',snapshot);
                // console.log('subio imagen',snapshot.metadata.fullPath);
                console.log('snapshot',snapshot);
                // Armar estructura de usuario para la insercion en la tabla users
                const jsonUser = {
                  fullName: result.user.displayName,
                  aboutMe: 'Cuenta un poco sobre ti',
                  location: 'Ciudad, País',
                  image: snapshot.metadata.fullPath,
                };

                // crear usuario en base de datos
                createProfileInfo(result.user.uid, jsonUser);

                // Entrar a la pantalla de home
                getUserInfo().then(() => {
                  changeView('#/home');
                });

              });
            })
            .catch((err) => {
              console.error('error al cargar imagen google', err.statusText);
            });
        } 
        // Si no hay foto, creamos el usuario en base de datos
        else {
          // Armar estructura de usuario para la insercion en la tabla users
          const jsonUser = {
            fullName: result.user.displayName,
            aboutMe: 'Cuenta un poco sobre ti',
            location: 'Ciudad, País',
            image: 'foto',
          };
          // crear usuario en base de datos
          createProfileInfo(result.user.uid, jsonUser);

          // Entrar a la pantalla de home
          getUserInfo().then(() => {
            changeView('#/home');
          });
        }
      }
      else {
        // // imagen de usuario gmail
        // const imgstorageRef = user.data().image;
        // const refStorage = storageRef(imgstorageRef);

        // getDownloadURL(refStorage).then((url) => {
        //   console.log(url);
        //   const img = document.getElementById('img_log');
        //   img.src = url;
        // });
        console.log('ya existe cuenta gmail');
        // Entrar a la pantalla de home
        getUserInfo().then(() => {
          changeView('#/home');
        });
      }
    });
  })
    .catch((err) => {
      console.log('error al logearse con google', err);
    });
};



const verifiedEmailResult = (result) => {
  if (result) {
    console.log('usuario verificado');
    // redireccionar a la pagina home
    getUserInfo().then(() => {
      changeView('#/home');
    });

  } else {
    console.log('usuario no verificado');
    // Mostrar mensaje de usuario no verificado
  }
};


