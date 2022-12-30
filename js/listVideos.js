import { api } from './api-connection.js';

list();

async function list() {
  const videosContainer = document.querySelector('.cards');
  const videos = await api.get();
  videos.forEach(video => {
    videosContainer.appendChild(
      createCard(video.title, video.views, video.url, video.image)
    );
  });
}

function createCard(title, views, url, image) {
  const listItem = document.createElement('li');
  listItem.classList.add('card');
  listItem.innerHTML = `
    <iframe
      width="100%"
      height="72%"
      src="${url}"
      title="${title}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="card__info">
      <img class="card__img" src="${image}" alt="${title}" />
      <h3 class="card__title">${title}</h3>
      <p class="card__views">${views}</p>
    </div>`;
  return listItem;
}

document.querySelector('[data-search]').addEventListener('click', search);

async function search(event) {
  event.preventDefault();

  const query = document.querySelector('#search').value;
  const videosContainer = document.querySelector('.cards');

  videosContainer.innerHTML = '';

  const videos = await api.query(query);

  videos.forEach(video => {
    videosContainer.appendChild(
      createCard(video.title, video.views, video.url, video.image)
    );
  });
}
