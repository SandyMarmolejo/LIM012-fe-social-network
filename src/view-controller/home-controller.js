import { user } from '../firebase-controller/auth-controller.js';

export const getAllPosts = callback => firebase.firestore().collection('posts')
  .orderBy('publishTime', 'desc')
  .onSnapshot((posts) => {
    const allPosts = [];
    posts.forEach((doc) => {
      allPosts.push(doc.data());
    });
    callback(allPosts);
  });

export const addPost = (userName, statusPrivacy, textPost, imagePath) => {
  const currentUser = user();
  const newPostObject = {
    userId: currentUser.uid,
    userName,
    statusPrivacy,
    text: textPost,
    imagePath,
    publishTime: new Date().toLocaleString(),
    likes: [],
    comments: [],
  };

  return firebase.firestore().collection('posts').add(newPostObject);
};

export const signOut = () => firebase.auth().signOut();
