import {
    logInGoogle,
  } from '../firebase-controller/auth-controller.js';
  import { createProfileInfo, getUser } from '../firebase-controller/firestore-controller.js';
  
  
  export const signingInGoogle = () => {
    logInGoogle().then((result) => {
      getUser(result.user.uid).then((doc) => {
        if (!doc.exists) {
          createProfileInfo(result.user.uid);
        }
      });
    });
  };
  