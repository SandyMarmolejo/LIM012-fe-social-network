// Validación
export const validation = callback => firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    console.log(user.emailVerified);
    
    // if (user) {
    //   if (user.emailVerified) {
    //         console.log('usuario verificado');
    //   }
    // }
  });
  