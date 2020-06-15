
import { changeView } from './view-controller/route-controller.js';

const init = () => {
  // Para que se haga un cambio cuando se recarga la página
  changeView(window.location.hash);
  // Para que se haga un cambio cuando se elige una seccion
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);

const initConfig = () => {
// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyDitiLTK8jr-8onhXUWSHHzsBks3i9H2iI',
    authDomain: 'red-social-1ce91.firebaseapp.com',
    databaseURL: 'https://red-social-1ce91.firebaseio.com',
    projectId: 'red-social-1ce91',
    storageBucket: 'red-social-1ce91.appspot.com',
    messagingSenderId: '1003027157066',
    appId: '1:1003027157066:web:c4fe8aab6583d7573296b3',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};
window.onload = initConfig();

