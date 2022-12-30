async function getVideos() {
  return await (await fetch(`http://localhost:3000/videos`)).json();
}

async function queryVideos(query) {
  return await (await fetch(`http://localhost:3000/videos?q=${query}`)).json();
}

async function setVideos(title, views, url, image) {
  fetch(`http://localhost:3000/videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      views: views,
      url: url,
      image: image,
    }),
  });
}

export const api = {
  get: getVideos,
  post: setVideos,
  query: queryVideos,
};
