// Creando un objeto, con propiedad home y ahi vamos a poner las vistas o componentes
import Login from './login.js';
import Register from './register.js';
import NotFound from './notFound.js';

// Propiedad y valores (es la funcion que esta retornando un elemento)
const components = {
  login: Login,
  register: Register,
  error: NotFound,
};

export { components };
