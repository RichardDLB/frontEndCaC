const API_URL = 'http://jsonplaceholder.typicode.com';

const XHR = new XMLHttpRequest();

function onRequestHandler() {
  if (this.readyState === 4 && this.status === 200) {
    const DATA = JSON.parse(this.response);
    const HTTP_RESPONSE = document.querySelector("#app");

    const TEMPLATE = DATA.map((user) => `<li>${user.name} ${user.email} <li>`);
    HTTP_RESPONSE.innerHTML = `<ul>${TEMPLATE}<ul>`
  }
}

XHR.addEventListener('load', onRequestHandler);
XHR.open('GET', `${API_URL}/users`);
XHR.send();