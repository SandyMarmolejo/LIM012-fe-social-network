export default () => {
    const viewRegister = document.createElement('div');
    viewRegister.classList.add('sign-up');
    viewRegister.innerHTML = `
  
    <div class="access-register-container">
      <div class="register-container">
        <p class="message-register">Regístrate</p>
        
        <form class="form-register"  id ="formRegister"></form>
          <input type="text" id="nameUser" class="name-register" placeholder="Nombre y Apellido" >
        
        
          <input type="email" id="emailSignUp" class="email-register" placeholder="e-mail" >
      
        
          <input type="password" id="passwordSignUp" class="password-register"   placeholder="contraseña">
       </form>
        
        <button class="btn-register" id="btnNewAccount">Crear cuenta</button>
        
        <p class="message-options">Inicia sesión con google</p>

        <div class="btn-Google"><i class="fab fa-google-plus-g" id="btnLogInGoogle" ></i>
        </div>  
          
        <div class="question-container">
         <p class="message-question">¿Ya tienes una cuenta?</p>
          <a class="text-init-session" id="btnViewLogIn" href="#/login">Inicia sesión</a>
        </div>  
     </div>  
    </div>`;
    return viewRegister;
}