import { components } from '../view/index.js';

// Cambio de vistas, para relacionar los view con main (window.location.hash)
const changeView = (route) => {
  // Llamando al section por id
  const container = document.getElementById('container');
  // Después de mostrar algo se limpie
  container.innerHTML = '';
  switch (route) {
    case '#/login':
    // En el container con el append se añade un elemento al DOM (más no una cadena)
    { return container.appendChild(components.login()); }
    case '#/register':
    { return container.appendChild(components.register()); }
    case '#/home':
    { return container.appendChild(components.home()); }
    case '#/notFound':
    { return container.appendChild(components.notFound()); }
    default:
    { window.location.hash = '/login';
      break;
    }
  }
  return (route);
};

export { changeView };
