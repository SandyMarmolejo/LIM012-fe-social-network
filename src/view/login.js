
export default () => {
    const viewLogin = document.createElement('div');
    viewLogin.classList.add('sign-in');
    viewLogin.innerHTML = `
      <div class="signin-container">
        <h1>Travel of world</h1>
        
        <p class="message">Bienvenido a Tow,la red que conecta viajeros en el mundo</p>

        <form class= "form-login">
        <input type="email" class="email-login" id="emailLogIn"  placeholder="e-mail" >
        <input type="password"class="password-login" id="passwordLogIn"  placeholder="contraseña" >
        <button class="btn-initsession" id="btnInitSession">Inicia sesión</button>
        </form>

        <p class="message1">O bien inicia con ...</p>
        <div class="btn-facebook" id="btnLogInFacebook"><i class="fab fa-facebook-f"></i>
        </div>
        <div class="btn-Google"><i class="fab fa-google-plus-g" id="btnLogInGoogle" ></i>
        </i>
        </div>
        </div>
        <p class="message2">¿No tienes una cuenta?</p>
        <button class="btn-signup" id="btnViewSignUp"><a href="#/registro">Regístrate</a></button>
      </div>
      
      `;
      // Iniciar sesión con Google
  const btnLogInGoogle = viewLogin.querySelector('#btnLogInGoogle');
  btnLogInGoogle.addEventListener('click', signingInGoogle);
    return viewLogin;
  };
  