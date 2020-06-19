import { registerUser } from '../view-controller/register-controller.js';

const register = () => {
  const viewRegister = `
  <h2>Travel of Wordl</h2>
  <form id="formRegister">
    <input id="txtNameSignUp" type="text" class="user active" value="Nombre y Apellido" onfocus="this.value = &#39;&#39;;" onblur="if (this.value == &#39;&#39;) {this.value = &#39;Nombre y Apellido&#39;;}">
    <input id="txtEmailSignUp" type="text" class="user active" value="Email" onfocus="this.value = &#39;&#39;;" onblur="if (this.value == &#39;&#39;) {this.value = &#39;Email&#39;;}">
    <input id="txtPasswordSignUp" type="password" class="lock active" value="Contraseña" onfocus="this.value = &#39;&#39;;" onblur="if (this.value == &#39;&#39;) {this.value = &#39;Contraseña&#39;;}">
    <input type="checkbox" value="Terminos" /> 
    <label>Acepto términos, condiciones y política de privacidad</label>

  </form>
  <div class="login-bwn">
    <input type="submit" value="Regístrate" id="btnRegister">
    <div id="divSuccefullyRegister" class="hide">
      <h4>Te hemos enviado un correo. </h4>
    </div>
    <div id="divErrorRegister" class="hide"><h4>Ha ocurrido un error, por favor reintentalo. </h4></div>
  </div>
  <div class="login-bottom">
   
    <div class="social-icons">
      <h4> <a href="#">¿Ya tienes una cuenta?</a></h4>
      <div class="reg-bwn">
        <a href="#/login" id="btnViewSignUp">Inicia sesión</a>
      </div>
    </div>
  </div>
`;
  // Creando un elemento nodo de tipo div
  const divRegister = document.createElement('div');
  // Añadimos una cadena de texto
  divRegister.innerHTML = viewRegister;
  divRegister.classList.add('login');

  const btnRegister = divRegister.querySelector('#btnRegister');

  btnRegister.addEventListener('click', () => {
    const txtName = divRegister.querySelector('#txtNameSignUp').value;
    const txtEmail = divRegister.querySelector('#txtEmailSignUp').value;
    const txtPassword = divRegister.querySelector('#txtPasswordSignUp').value;

    registerUser(txtName, txtEmail, txtPassword)
      .then(() => {
        document.getElementById('divErrorRegister').classList.add("hide");
        document.getElementById('divSuccefullyRegister').classList.remove("hide");
        document.getElementById('divSuccefullyRegister').classList.add("show");
      }).catch(() => {
        document.getElementById('divSuccefullyRegister').classList.add("hide");
        document.getElementById('divErrorRegister').classList.remove("hide");
        document.getElementById('divErrorRegister').classList.add("show");
      });
  });

  return divRegister;
};

export default register;
