import { components } from '../view/index.js';
import { getAllPosts } from '../view-controller/home-controller.js';

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
      return getAllPosts((posts) => {
        const arrayPosts = [];
        posts.forEach((post) => {
          if (post.statusPrivacy === 'public') {
            arrayPosts.push(post);
          }
        });
        container.innerHTML = '';
        window.location.hash = '/home';
        return container.appendChild(components.home(arrayPosts));
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
