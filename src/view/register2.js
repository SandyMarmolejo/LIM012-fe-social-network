const register = () => {
  const viewRegister = `
  <h2>Travel of Wordl</h2>
  <form id="formRegister">
    <input id="txtNameSignUp" type="text" class="user active" value="Nombre y Apellido" onfocus="this.value = &#39;&#39;;" onblur="if (this.value == &#39;&#39;) {this.value = &#39;Nombre y Apellido&#39;;}">
    <input id="txtEmailSignUp" type="text" class="user active" value="Email" onfocus="this.value = &#39;&#39;;" onblur="if (this.value == &#39;&#39;) {this.value = &#39;Email&#39;;}">
    <input id="txtPasswordSignUp" type="password" class="lock active" value="Contraseña" onfocus="this.value = &#39;&#39;;" onblur="if (this.value == &#39;&#39;) {this.value = &#39;Contraseña&#39;;}">
    <input type="checkbox" value="Terminos" /> 
      <label>Acepto términos, condiciones y política de privacidad</label>
    <div class="login-bwn">
        <input type="submit" value="Regístrate" id="btnRegister">
    </div>
  </form>

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

  // Creando una cuenta de usuario
  const formRegister = divRegister.querySelector('#formRegister');
  formRegister.addEventListener('submit', () => {

  });

  return divRegister;
};

export default register;
