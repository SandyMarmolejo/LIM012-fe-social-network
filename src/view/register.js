const register = () => {
  const viewRegister = `
<header class="logo-container">
    <h1 class="title-logo">TRAVEL OF WORLD</h1>
</header>

<main class="access-register-container">
    <p class="message-register">Regístrate</p>
    <form class="register">
        <p>
            <input type="text" id="txtNameSignUp" class="field-to-complete" placeholder="Nombre y Apellido" />
        </p>
        <p>
            <input type="text" id="txtEmailSignUp" class="field-to-complete" placeholder="Email" />
        </p>
        <p>
            <input type="text" id="txtPasswordSignUp" class="field-to-complete" placeholder="Contraseña" />
        </p>
        <p>
            <input type="checkbox" value="Terminos" /> <label>Acepto términos, condiciones y política de privacidadr</label>
        </p>
        <input type="button" value="Register" id="btnRegister" />
    </form>

    <div class="question-container">
    <p class="message-question">¿Ya tienes una cuenta?</p>
    <a href="#/login" class="press">Inicia sesión</a>
    </div>
</main>
`;
  // Creando un elemento nodo de tipo div
  const divRegister = document.createElement('div');
  // Añadimos una cadena de texto
  divRegister.innerHTML = viewRegister;

  return divRegister;
};

export default register;
