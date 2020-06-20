import { user } from '../firebase-controller/auth-controller.js';
import { getUser } from '../firebase-controller/firestore-controller.js';

export const getUserInfo = () => {
  const currentUser = user();

  return getUser(currentUser.uid).then((doc) => {
    localStorage.setItem('fullName', doc.data().fullName);
    localStorage.setItem('userPhoto', doc.data().image);
    localStorage.setItem('aboutMe', doc.data().aboutMe);
    localStorage.setItem('location', doc.data().location);
  });
};
