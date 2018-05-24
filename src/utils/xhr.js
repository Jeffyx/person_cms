const xhr = new XMLHttpRequest();

function request(url, data) {
  return new Promise((resolve, reject) => {
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        console.log(this.responseText);
        resolve(this.responseText);
      }
    });

    xhr.open("POST", "https://image.xiexiaoshun.com/" + url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");

    xhr.send(data);
  });
}

export default request;
