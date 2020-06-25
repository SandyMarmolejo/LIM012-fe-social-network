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

export const addPost = (userName, statusPrivacy, textPost, imageContent) => {
  const currentUser = user();
  const newPostObject = {
    userId: currentUser.uid,
    userName: userName,
    statusPrivacy: statusPrivacy,
    text: textPost,
    imageContent: imageContent,
    publishTime: new Date().toLocaleString(),
    likes: [],
    comments: [],
  };

  return firebase.firestore().collection('posts').add(newPostObject);
};

export const signOut = () => firebase.auth().signOut();
