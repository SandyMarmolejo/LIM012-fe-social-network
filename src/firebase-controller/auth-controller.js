
// eslint-disable-next-line max-len
const signIn = (emailLogIn, passwordLogIn) => firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn);

// eslint-disable-next-line max-len
const signUp = (emailSignUp, passwordSignUp) => firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp);
/* firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
}); */

const logInGoogle = () => {
  // Creando instancia del proveedor - Google
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(providerGoogle);
};

export { signIn, signUp, logInGoogle };
