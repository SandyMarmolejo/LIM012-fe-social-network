import { user } from '../firebase-controller/auth-controller.js';
import { getUser } from '../firebase-controller/firestore-controller.js';
import { storageRef, getDownloadURL } from '../firebase-controller/storage-controller.js';

export const getUserInfo = () => {
  const currentUser = user();
  return getUser(currentUser.uid).then((doc) => {

    localStorage.setItem('idUser', currentUser.uid);
    localStorage.setItem('fullName', doc.data().fullName);
    localStorage.setItem('aboutMe', doc.data().aboutMe);
    localStorage.setItem('location', doc.data().location);
    localStorage.setItem('image', doc.data().image);

    const imgstorageRef = doc.data().image;
    const refStorage = storageRef(imgstorageRef);

    return getDownloadURL(refStorage).then((url) => {
      localStorage.setItem('userPhoto', url);
    });

  });
};
