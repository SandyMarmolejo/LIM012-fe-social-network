import { changeView } from './src/view-controller/route.js';


const initPathBase = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', initPathBase);
