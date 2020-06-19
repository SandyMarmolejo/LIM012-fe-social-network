import { signingIn, signingInGoogle } from '../view-controller/sigin-controller.js';
import { changeView } from '../view-controller/route-controller.js';
import { getUserInfo } from '../view-controller/login-controller.js';

const login = () => {
  const viewLogin = `
 
  <h2>Travel of Wordl</h2>
  <form>
    <input id="txtLoginEmail" type="text" class="user active" value="Email" onfocus="this.value = &#39;&#39;;" onblur="if (this.value == &#39;&#39;) {this.value = &#39;Email&#39;;}">
    <input id="txtloginPassword" type="password" class="lock active" value="Password" onfocus="this.value = &#39;&#39;;" onblur="if (this.value == &#39;&#39;) {this.value = &#39;Password&#39;;}">
  </form>
  <div class="forgot">
     <div class="login-check">
        <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i> </i>Remember Me</label>

      </div>

      <div class="clear"> </div>
  </div>
  
  <div class="login-bwn">
    <input type="submit" value="Log in" id="btnLogin">
    <div id="divErrorLogin" class="hide"><h4>Ha ocurrido un error, por favor reintentalo. </h4></div>
  </div>
  <div class="login-bottom">
    <p>O ingresa con</p>
    <div class="social-icons">
      <div class="button">
        <a class="fa" href="#" id="btnLogInFacebook"> 
            <i class="anc-fa"> </i> 
            <span>Facebook</span>
            <div class="clear"> </div>
        </a>
        <a class="go" href="#" id="btnLogInGoogle">
            <i class="anc-go"> </i>
            <span>Google+</span>
            <div class="clear"> </div>
        </a>
        <div class="clear"> </div>
      </div>
      <h4> <a href="#">No tienes una cuenta?</a></h4>
      <div class="reg-bwn">
        <a href="#/register" id="btnViewSignUp">Regístrate</a>
      </div>
    </div>
  </div>

`;

  // Creando un elemento nodo de tipo div
  const divLogin = document.createElement('div');
  // Añadimos una cadena de texto
  divLogin.innerHTML = viewLogin;
  divLogin.classList.add('login');

  const btnLogin = divLogin.querySelector('#btnLogin');
  const btnLogInFacebook = divLogin.querySelector('#btnLogInFacebook');
  const btnLogInGoogle = divLogin.querySelector('#btnLogInGoogle');


  btnLogin.addEventListener('click', () => {
    const txtEmail = divLogin.querySelector('#txtLoginEmail').value;
    const txtPassword = divLogin.querySelector('#txtloginPassword').value;
    
    signingIn(txtEmail, txtPassword).then(() => {
      getUserInfo().then(() => {
        changeView('#/home');
      });
    }).catch((e) => {
      console.log(e);
      document.getElementById('divErrorLogin').classList.remove('hide');
    });
  });

  btnLogInFacebook.addEventListener('click', () => {
    console.log('btnLogInFacebook');
  });

  btnLogInGoogle.addEventListener('click', () => {
    signingInGoogle();
  });

  return divLogin;
};

export default login;
