import {
  table_users, storage_perfil
} from '../util/util.js ';


export const createData = (table, id, json) => {
  firebase.firestore().collection(table).doc(id).set(json);
};

export const getData = (table, id) => {
  const docRef = firebase.firestore().collection(table).doc(id);
  return docRef.get();
};

// export const getUser = docId => firebase.firestore().collection('users').doc(docId).get();

export const getUser = docId => getData(table_users,docId);

// export const createProfileInfo = (id) => {
//   firebase.firestore().collection('users').doc(id).set({
//     aboutMe: 'Cuenta un poco sobre ti',
//     location: 'Ciudad, País',
//     image: 'foto',
//   });
// };

export const createProfileInfo = (id, json) => createData(table_users, id, json);
