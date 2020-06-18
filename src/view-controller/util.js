
//Variables globales
export const table_users = "users";
export const storage_perfil = "perfil";


//metodos

export const nameImage = () => { return uuid.v4();  };


export const getBlobByUrl2 = (url) => {
    // console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    
    xhr.onload = function(event) {
         var blob = xhr.response;
         console.log(blob);
    };
    
     xhr.send();
    return xhr.response;
}

export const  getBlobByUrl = (url) => {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send();
    });
  }