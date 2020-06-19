import { changeView } from './view-controller/route-controller.js';

const init = () => {
  // Para que se haga un cambio cuando se recarga la página
  changeView(window.location.hash);
  // Para que se haga un cambio cuando se elige una seccion
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
