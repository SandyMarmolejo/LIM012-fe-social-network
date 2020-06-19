import { user } from '../firebase-controller/auth-controller.js';
import { getUser } from '../firebase-controller/firestore-controller.js';

export const getUserInfo = () => {
    const currentUser = user();
    
    return getUser(currentUser.uid).then((doc) => {
        localStorage.setItem('name', doc.data().fullname);
        localStorage.setItem('userphoto', doc.data().image);
    });  
};
