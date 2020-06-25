

export const createData = (table, id, json) => {
  console.log('table', table);
  console.log('id', id);
  console.log('json', json);
  firebase.firestore().collection(table).doc(id).set(json);
};

export const getData = (table, id) => {
  const docRef = firebase.firestore().collection(table).doc(id);
  return docRef.get();
};

export const getUser = docId => firebase.firestore().collection('users').doc(docId).get();

export const createProfileInfo = (id) => {
  firebase.firestore().collection('users').doc(id).set({
    aboutMe: 'Cuenta un poco sobre ti',
    location: 'Ciudad, País',
    image: 'foto',
  });
};
