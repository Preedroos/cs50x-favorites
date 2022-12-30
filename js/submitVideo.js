import { api } from './api-connection.js';

document.querySelector('[data-submit]').addEventListener('click', event => {
  submit(event);
});

function submit(event) {
  event.preventDefault();

  const url = document.querySelector('[data-url]').value;
  const title = document.querySelector('[data-title]').value;
  const image = './images/lamp.png';
  const views = `${Math.floor(
    Math.random() * 10
  ).toString()}k views`;

  api.post(title, views, url, image);

  window.location.href = '../pages/added.html';
}
