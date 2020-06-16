
// Creando un objeto, con propiedad home y ahi vamos a poner las vistas o componentes
import Login from './login.js';
import Register from './register.js';
import Home from './home.js';
import Profile from './profile.js';
import NotFound from './notFound.js';

const components = {
  login: Login,
  register: Register,
  error: NotFound,
  home: Home,
  profile: Profile,

};

export { components };
