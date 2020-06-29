import { components } from '../view/index.js';
import { user } from '../firebase-controller/auth-controller.js';
import { getAllPosts } from '../firebase-controller/firestore-controller.js';

// Cambio de vistas, para relacionar los view con main (window.location.hash)
const changeView = (route) => {
  // Llamando al section por id
  const container = document.getElementById('container');
  // Después de mostrar algo se limpie
  container.innerHTML = '';
  switch (route) {
    case '#/login':
    // En el container con el append se añade un elemento al DOM (más no una cadena)
    {
      window.location.hash = '/login';
      return container.appendChild(components.login());
    }
    case '#/register':
    {
      window.location.hash = '/register';
      return container.appendChild(components.register());
    }
    case '#/home':
    {

      window.location.hash = '/home';

      return getAllPosts((posts) => {
        //  console.log(posts);
        const listPosts = [];
        
        posts.forEach((post) => {
          if (post.statusPrivacy === 'public' || post.userId == user().uid) {
            listPosts.push(post);
          }
        });

        container.innerHTML = '';  
        return container.appendChild(components.home(listPosts));
      });

    }
    default:
    {
      window.location.hash = '/login';
      return container.appendChild(components.login());
    }
  }
};

export { changeView };
