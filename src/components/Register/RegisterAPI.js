export const registerApi = (event) => {

  const data = new FormData(event.target);

  return new Promise ((resolve, reject) => {
    fetch(process.env.REACT_APP_APISERVER + "register", {
      method: "POST",
      headers: {},
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        resolve (result);
      });
  });
};
