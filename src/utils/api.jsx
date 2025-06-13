const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const loadImage = (image_path) => {
  return BASE_URL + "/public" + image_path;
};

export const getDataUTS = async (url) => {
  return fetch(BASE_URL + url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) =>
      response.status >= 200 &&
      response.status <= 299 &&
      response.status !== 204
        ? response.json()
        : response,
    )
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const getPlaylistData = async (playlistId) => {
  return getDataUTS(`/api/playlist/${playlistId}`);
};

export const sendData = async (url, data) => {
  const response = await fetch(BASE_URL + url, {
    method: 'POST',
    body: data,
  });
  return response.json();
};

export const deleteData = async (url) => {
  const response = await fetch(BASE_URL + url, {
    method: 'DELETE',
  });
  return response.json();
};
