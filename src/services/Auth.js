import { Component } from "react";

class Auth extends Component {
  constructor() {
    super();
  }

  login = (userData) => {
    //http://localhost:8888/oopphoto/cloudphoto/www/register
    //http://hostingdb.g6.cz/www/loginjwt
    //http://localhost:8888/photostorage-BE/www/loginjwt
    let BaseURL = process.env.REACT_APP_APISERVER+"loginjwt";

    console.log(JSON.stringify(userData));
    return new Promise((resolve, reject) => {
      fetch(BaseURL, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  isAuthenticated() {
    return sessionStorage.getItem("prihlasen");
  }


  hasAccess = async (accessToken) => {


    return 
  }

}

export default new Auth();
