import { changeView } from './src/view-controller/route.js';

const init = () => {
  // Para que se haga un cambio cuando se recarga la página
  changeView(window.location.hash);
  // Para que se haga un cambio cuando elige una seccion
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
