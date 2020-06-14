export default () => {
    const viewRegister = document.createElement('div');
    viewRegister.classList.add('sign-up');
    viewRegister.innerHTML = `
  
    <div class="register-container">
      <div class="register-container register">
        <p class="messageText-1">Regístrate</p>
        
  
        <div><input class="input-register newUser" id="nameUser" type="text" placeholder="Nombre de usuario"> </div>
        
        
        <div><input class="input-register newUser" id="emailSignUp" type="email" placeholder="e-mail" > </div>
      
        
        <div><input class="input-register newUser" id="passwordSignUp" type="password" placeholder="contraseña"> </div>
        
        <button class="btn-new-account btn-locked" id="btnNewAccount" disabled=true>Crear cuenta</button>
        <div class="btn-google  id="btnLogInGoogle"><img src="./img/google.png">
          <div class="logo-google googleRegister"></div>
          <p class="text-5">Ingresa sesión con Google</p>
        </div>
      </div>
      <p class="messageText-2">¿Ya tienes una cuenta?</p>
      <a class="text-init-session" id="btnViewLogIn" href="#/login">Inicia sesión</a>
    </div>`;
    return viewRegister;
}