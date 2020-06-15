
import { logInGoogle } from '../firebase-controller/auth-controller.js';


export const signingInGoogle = () => {
  logInGoogle().then((result) => {
    getUser(result.user.uid).then((doc) => {
      if (!doc.exists) {
        createProfileInfo(result.user.uid);
      }
    });
  });
};
