import {
  table_users,table_posts 
} from '../util/util.js ';
import { storageRef, getImageURL } from './storage-controller.js';

export const createData = (table, id, json) => {
  firebase.firestore().collection(table).doc(id).set(json);
};

export const getData = (table, id) => {
  const docRef = firebase.firestore().collection(table).doc(id);
  return docRef.get();
};

export const getUser = docId => getData(table_users,docId);

export const createProfileInfo = (id, json) => createData(table_users, id, json);

export const updateUserImage = (userId, url) => firebase.firestore().collection(table_users).doc(userId).update({
  image: url,
});

export const publishPost = (idUsuario, name, post, image, time, status) => firebase.firestore().collection(table_posts).add({
  userName: name,
  text: post,
  userId: idUsuario,
  imageContent: image,
  publishTime: time,
  statusPrivacy: status,
  likes: [],
  comments: []
});


export const getAllPosts = callback => firebase.firestore().collection(table_posts)
  .orderBy('publishTime', 'desc')
  .onSnapshot((querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      // let imageUrl = "";

      //Obtenemos el url de la imagen si existe
      // if (doc.data().imageContent){
      //   let storage = storageRef(doc.data().imageContent);
      //   imageUrl  = getImageURL(storage);
      // }
      
      posts.push({ id: doc.id, ...doc.data() });
    });
    callback(posts);
  });





/********************************************************************************* */


export const updatePost = (id, post) => firebase.firestore().collection('posts').doc(id).update({ post: post });

export const updatePrivacy = (id, status) => firebase.firestore().collection('posts').doc(id).update({ privacy: status });

// Comentarios

export const publishComment = (userName, comment, idPost, date, userId) => firebase.firestore().collection('comments').add({
  user: userName,
  comment: comment,
  idPost: idPost,
  time: date,
  userId: userId,
});

export const getAllComments = (callback, id) => firebase.firestore().collection('comments')
  .where('idPost', '==', id)
  .orderBy('time', 'asc')
  .onSnapshot((querySnapshot) => {
    const allComments = [];
    querySnapshot.forEach((doc) => {
      allComments.push({ id: doc.id, ...doc.data() });
    });
    callback(allComments);
  });

export const updateComment = (id, comment) => firebase.firestore().collection('comments').doc(id).update({ comment: comment });