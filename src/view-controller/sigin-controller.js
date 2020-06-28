import {  signIn, logInGoogle, signUp ,verificationEmail,validation  } from '../firebase-controller/auth-controller.js';
import {  createData, getData  } from '../firebase-controller/firestore-controller.js';
import { storageRef,put ,getDownloadURL } from '../firebase-controller/storage-controller.js';
import { table_users,storage_perfil, nameImage, getBlobByUrl  } from './util.js';


// Ingreso con usuario y contraseña
export const signingIn = (email, password) => {

  signIn(email, password).then(() => {
    console.log('logeo exitoso');
    //Verificar usuario correo
    validation(verifiedEmailResult);
    
  })
  .catch((err) => {
          console.log('error al logearse', err);
  });
};

// Ingreso utilizando google
export const signingInGoogle = () => {
  logInGoogle().then((result) => {

    console.log('logeo exitoso con google', result);

    //Verificar si el usuario esta registrado en la base de datos
    getData(table_users, result.user.uid).then( (user) => {
      console.log('user.exists',user);
      if(!user.exists){

          if(result.user.photoURL){
             let imgstorageRef = storage_perfil + '/' + nameImage() + '.jpg';

             getBlobByUrl(result.user.photoURL)
              .then(function (blob) {
                  // console.log('blob',blob);
                  let refStorage = storageRef(imgstorageRef);

                  put(refStorage,blob).then( snapshot => {
                      // console.log('subio imagen',snapshot);
                      // console.log('subio imagen',snapshot.metadata.fullPath);
                      
                      //Armar estructura de usuario para la insercion en la tabla users
                      let jsonUser = {
                        fullname: result.user.displayName,
                        aboutMe: 'Cuenta un poco sobre ti',
                        location: 'Ciudad, País',
                        image: snapshot.metadata.fullPath
                      };

                      //crear usuario en base de datos
                      createData(table_users,result.user.uid, jsonUser);
                });
              
              })
              .catch(function (err) {
                console.error('error al cargar iamgen google', err.statusText);
              });
               
          }else{

            //Armar estructura de usuario para la insercion en la tabla users
            let jsonUser = {
              fullname: result.user.displayName,
              aboutMe: 'Cuenta un poco sobre ti',
              location: 'Ciudad, País',
              image: 'foto'
            };
            //crear usuario en base de datos
            createData(table_users,result.user.uid, jsonUser);
          }
      }
      else{
        
        //imagen de usuario gmail
        let imgstorageRef = user.data().image;
        let refStorage = storageRef(imgstorageRef);

        getDownloadURL(refStorage).then( function(url) {
          console.log(url);
          var img = document.getElementById('img_log');
          img.src = url;
        });


        //Entrar a la pantalla de home
        

      }

    });
   
  })
  .catch((err) => {
    console.log('error al logearse con google', err);
  });
};

// Registrar Usuario
export const registerUser = (name, email, password) => {

  //metodo para la creación de la autentificacion en firebase - result -> resultado de mi registro
  signUp(email,password).then((result) => {
      console.log('registro exitoso', result);

      //Armar estructura de usuario para la insercion en la tabla users
      let jsonUser = {
        fullname: name,
        aboutMe: 'Cuenta un poco sobre ti',
        location: 'Ciudad, País',
        image: 'foto'
      };

      //Insertar registro en la tabla users
      createData(table_users, result.user.uid, jsonUser);

      //Enviar correo de verificación
      verificationEmail().then(() =>{

          console.log('correo enviado');
          //retornar a la vista login

      });
    
    })
    .catch((err) => {
      console.log('error al enviar correo', err);
    });
};



const verifiedEmailResult = (result) => {

    if(result){
      console.log('usuario verificado');
      // redireccionar a la pagina home
    }
    else{
      console.log('usuario no verificado');
      //Mostrar mensaje de usuario no verificado 
    }

};










/*





import {  signIn, logInGoogle,verificationEmail  } from './auth.js';

  import { validation } from './validacion.js';

  
  export const signingIn = ( emailLogIn, passwordLogIn) => {

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
    var  storageRef  = firebase.storage().ref().child("PIC_20180218_0405.jpg");
    

    

    storageRef.getDownloadURL().then(function(url) {
        console.log(url);
    
        //Descargar imagen
          // var xhr = new XMLHttpRequest();
          // xhr.responseType = 'blob';
          // xhr.onload = function(event) {
          //   var blob = xhr.response;
          // };
          // xhr.open('GET', url);
          // xhr.send();
    
          // console.log(xhr);
        
      
          var img = document.getElementById('img_log');
          img.src = url;
       
    
      }).catch(function(error) {
        console.log(error);
      });

  }




  */