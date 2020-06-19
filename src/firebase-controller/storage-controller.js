
//  referencia del storage
export const storage = () => firebase.storage().ref();

//  referencia de imagen del storage
export const storageRef = imgRef => firebase.storage().ref().child(imgRef);

//  subir archivo
export const put = (storage, file) => storage.put(file);

//  obterner Url para descarga de archivo
export const getDownloadURL = storageRef => storageRef.getDownloadURL();
