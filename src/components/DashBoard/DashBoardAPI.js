export const addPhotoApi = (event) => {
  const data = new FormData(event.target);

  return new Promise((resolve, reject) => {
    fetch(process.env.REACT_APP_APISERVER + "photo", {
      method: "POST",
      credentials: "include",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      });
  });
};

export const downloadPhotoApi = (filename) => {
  fetch(process.env.REACT_APP_APISERVER + "photo/" + filename, {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.blob())
    .then(function (myBlob) {
      var url = URL.createObjectURL(myBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "filename" || "download";
      a.click();
    });
};

export const deletePhotoApi = (filename) => {
  return new Promise((resolve, reject) => {
    fetch(process.env.REACT_APP_APISERVER + "photo/" + filename, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      });
  });
};

export const addAlbumApi = (event) => {
  const data = new FormData(event.target);
  return new Promise((resolve, reject) => {
    fetch(process.env.REACT_APP_APISERVER + "album", {
      method: "POST",
      credentials: "include",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      });
  });
};

export const viewAlbumApi = (albumId) => {
  return new Promise((resolve, reject) => {
    fetch(process.env.REACT_APP_APISERVER + "album/" + albumId, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      });
  });
};

export const getAllPhotosApi = () => {
  return new Promise((resolve, reject) => {
    fetch(process.env.REACT_APP_APISERVER + "photo", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      });
  });
};

export const albumDeleteApi = (idAlbum) => {
  return new Promise((resolve, reject) => {
    fetch(process.env.REACT_APP_APISERVER + "album/" + idAlbum, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      });
  });
};
