const register = () => {
  const viewRegister = `
  <h1 class="title-logo">TRAVEL OF WORLD</h1>
  <main class="access-register-container">
   
    <form id="formRegister" class="form-register">
        <p>
            <input type="text" id="txtNameSignUp" class="name-register" placeholder="Nombre y Apellido" required/>
        </p>
        <p>
            <input type="text" id="txtEmailSignUp" class="email-register" placeholder="Email" required/>
        </p>
        <p>
            <input type="text" id="txtPasswordSignUp" class="password-register" placeholder="Contraseña" required/>
        </p>
        <p>
            <input type="checkbox" value="Terminos" /> <label>Acepto términos, condiciones y política de privacidad</label>
        </p>
        <button href="#/register" id="btnRegister" class="btn-register">Regístrate</button>
    </form>

    <div class="question-container">
    <p class="message-question">¿Ya tienes una cuenta?</p>
    <a href="#/login" id="btnViewLogIn" class="txt-init-session">Inicia sesión</a>
    </div>
</main>
`;
  // Creando un elemento nodo de tipo div
  const divRegister = document.createElement('div');
  // Añadimos una cadena de texto
  divRegister.innerHTML = viewRegister;

  // Creando una cuenta de usuario
  const formRegister = divRegister.querySelector('#formRegister');
  formRegister.addEventListener('submit', () => {
  });

  return divRegister;
};

export default register;
