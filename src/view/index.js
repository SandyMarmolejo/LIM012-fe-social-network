
// Creando un objeto, con propiedad home y ahi vamos a poner las vistas o componentes
import Login from './login2.js';
import Register from './register2.js';
import Home from './home.js';
import NotFound from './notFound.js';

const components = {
  login: Login,
  register: Register,
  error: NotFound,
  home: Home,
};

export { components };
