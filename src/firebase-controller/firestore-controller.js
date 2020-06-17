
export const createProfileInfo = (id) => {
    firebase.firestore().collection('users').doc(id).set({
      aboutMe: 'Cuenta un poco sobre ti',
      location: 'Ciudad, País',
      image: 'foto'
    });
  };
  