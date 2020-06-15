
import { changeView } from './view-controller/route-controller.js';

const init = () => {
  // Para que se haga un cambio cuando se recarga la página
  changeView(window.location.hash);
  // Para que se haga un cambio cuando se elige una seccion
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);


const initConfig = () => {
  const firebaseConfig = {

    apiKey: "AIzaSyDVsk1VMH790IMmi9jqlU00qI_2qng_rx0",
    authDomain: "red-social-lim012.firebaseapp.com",
    databaseURL: "https://red-social-lim012.firebaseio.com",
    projectId: "red-social-lim012",
    storageBucket: "red-social-lim012.appspot.com",
    messagingSenderId: "125591269748",
    appId: "1:125591269748:web:7a00856d995d9dc2cebc21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};

window.onload = initConfig();








