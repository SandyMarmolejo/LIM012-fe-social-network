
const login = () => {
  const viewLogin = `
  <div class="signin-container">
  <h1>TRAVEL OF WORLD</h1>
    <p class="message-welcome">Bienvenido a Tow, la red que conecta viajeros en el mundo</p>
    <form class="form-login">
        <p>
            <input type="text"  id="txtLoginEmail" class="email-login" placeholder="Email" required/>
        </p>
        <p>
            <input type="text" id="txtloginPassword" class="password-login" placeholder="Password" required/>
        </p>
        <p>
            <button type="button" id="btnLogin" class="btn-login">Login</button>
        </p>
    </form>
    <p class="message-options">O ingresa con</p>
    <div class="login-networks">
     <i class="fab fa-facebook-f"></i>
     <i class="fab fa-google-plus-g" id="btnLogInGoogle" ></i>
    </div>
    <div class="question-container">
      <p class="message-question">No tienes una cuenta?</p>
      <a href="#/register" id="btnViewSignUp" class="txt-sign-up">Regístrate</a>
    </div>
  </main>
  </div>
`;

  // Creando un elemento nodo de tipo div
  const divLogin = document.createElement('div');
  // Añadimos una cadena de texto
  divLogin.innerHTML = viewLogin;
  
  
  return divLogin;
};

export default login;
     
 
  

