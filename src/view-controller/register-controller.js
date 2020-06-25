/* eslint-disable semi */
/* eslint-disable arrow-body-style */
// Registrar Usuario

import { signUp, verificationEmail } from '../firebase-controller/auth-controller.js';
import { createData } from '../firebase-controller/firestore-controller.js';
import { table_users } from './util.js';

export const registerUser = (name, email, password) => {
  // metodo para la creación de la autentificacion en firebase - result -> resultado de mi registro
  return signUp(email, password).then((result) => {
    // Armar estructura de usuario para la insercion en la tabla users
    const jsonUser = {
      fullName: name,
      aboutMe: 'Cuenta un poco sobre ti',
      location: 'Ciudad, País',
      image: 'images\\defaultAvatarMixto.jpg',
    };

    // Insertar registro en la tabla users
    createData(table_users, result.user.uid, jsonUser);
    console.log('registro exitoso', result);

    // Enviar correo de verificación
    verificationEmail().then(() => {
      console.log('correo enviado');
      // retornar a la vista login
    });
  });
}
