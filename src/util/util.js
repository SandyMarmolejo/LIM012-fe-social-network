
// Variables globales
export const table_users = 'users';
export const table_posts = 'posts';
export const storage_perfil = 'perfil';
export const storage_post = 'post';


// metodos

export const nameImage = () => uuid.v4();

export const getBlobByUrl = url => new Promise(((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 300) {
      resolve(xhr.response);
    } else {
      reject({
        status: this.status,
        statusText: xhr.statusText,
      });
    }
  };
  xhr.onerror = function () {
    reject({
      status: this.status,
      statusText: xhr.statusText,
    });
  };
  xhr.send();
}));


export const dataURLtoFile = (dataurl, filename) => {
  
  let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
  bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, {type:mime});

}
