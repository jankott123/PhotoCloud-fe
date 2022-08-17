import React, { Component } from "react";
import Photo from "./Photo/photo";
import UploadForm from "../UploadForm/UploadForm";
import AddAlbum from "./AddAlbum/AddAlbum";
import ShareAlbum from "./ShareAlbum/ShareAlbum";
import Cookies from "universal-cookie";
import Authorization, { hasAccess } from "../../services/Authorization";
import SelectAlbum from "../SelectAlbum/SelectAlbum";
import AddAlbumButton from "./AddAlbum/AddAlbumButton";
import ShareAlbumButton from "./ShareAlbum/ShareAlbumButton";
import {
  addPhotoApi,
  downloadPhotoApi,
  deletePhotoApi,
  addAlbumApi,
  viewAlbumApi,
  getAllPhotosApi,
  albumDeleteApi,
} from "./DashBoardAPI";

import "./DashBoard.css";

class DashBoard extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    error: null,
    isLoaded: false,
    idalbum: [],
    albtoogle: "All photos",
    albtoogle2: "All photos",
    show: "hide",
    showUserForm: "hide",
    fullscreen: "hide",
    fullscreenUrl: "",
  };

  showForm = () => {
    if (this.state.show === "hide") {
      this.setState({
        show: "showForm",
      });
    }

    if (this.state.show === "showForm") {
      this.setState({
        show: "hide",
      });
    }
  };

  //pridani novych fotografii POST
  addPhoto = async (event) => {
    event.preventDefault();
    await hasAccess();
    addPhotoApi(event).then((val) => {
      this.setState({
        items: val,
      });
    });
  };

  // nacteni vsech alb a fotografii GET
  async componentDidMount() {
    await hasAccess();

    const cookies = new Cookies();
    const username = cookies.get("username");

    this.setState({
      username: username,
    });

    fetch(process.env.REACT_APP_APISERVER + "photo", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.filename,
            albums: result.albumname,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  // stazeni fotografie GET
  handleDownload = async (filename) => {
    await hasAccess();
    downloadPhotoApi(filename);
  };

  // smazani fotografie DELETE
  deletePhoto = async (filename) => {
    await hasAccess();

    deletePhotoApi(filename).then((val) => {
      this.setState({
        isLoaded: true,
        items: val,
      });
    });
  };
  // vlozeni noveho Alba POST
  addAlbum = async (event) => {
    event.preventDefault();
    await hasAccess();

    const data = new FormData(event.target);

    addAlbumApi(event).then((value) => {
      if (value !== "empty" && value !== "BadFormat") {
        const temp = this.state.albums;
        temp.push(value);

        this.setState({
          albums: temp,
          show: "hide",
        });
      }
      if (value == "empty") {
        alert("Album cannot be empty");
      }

      if (value == "BadFormat") {
        alert("Wrong format of Album name");
      }
    });
  };

  // Zobrazeni fotek z daneho alba GET
  viewAlbum = async (album, value) => {
    await hasAccess();

    const albumId = album.album.id;
    viewAlbumApi(albumId).then((val) => {
      this.setState({
        albtoogle: album.album.name,
        items: val,
      });
    });
  };

  fullScreen = async (filename) => {
    await hasAccess();
    this.setState({
      fullscreen: "fullscreen",
      fullscreenUrl: process.env.REACT_APP_APISERVER + "photo/" + filename,
    });
  };

  viewUserForm = (value) => {
    if (this.state.showUserForm == value) {
      this.setState({
        showUserForm: "hide",
      });
    } else {
      this.setState({
        showUserForm: value,
      });
    }
  };

  hide = () => {
    this.setState({
      fullscreen: "hide",
    });
  };

  getAllPhotos = async () => {
    await hasAccess();
    getAllPhotosApi().then((result) => {
      this.setState({
        items: result.filename,
        albtoogle: "All photos",
      });
    });
  };

  albumDelete = async (album) => {
    const idAlbum = album.album.id;

    await hasAccess();

    albumDeleteApi(idAlbum).then((result) => {
      this.setState({
        albums: result.albumname,
        albtoogle: "All photos",
      });
      this.getAllPhotos();
    });
  };

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-7 col-12">
            <UploadForm refresh={this.addPhoto} options={this.state.albums} />
          </div>

          <div class="col-sm-5 col-7 options d-flex justify-content-end">
            <SelectAlbum
              getAllPhotos={this.getAllPhotos}
              albumDelete={this.albumDelete}
              viewAlbum={this.viewAlbum}
              albums={this.state.albums}
              albtoogle={this.state.albtoogle}
              albtoogle2={this.state.albtoogle2}
            />

            <AddAlbumButton showForm={this.showForm} />

            <ShareAlbumButton viewUserForm={this.viewUserForm} />
          </div>
        </div>
        <ShareAlbum
          hide={this.viewUserForm}
          css={this.state.showUserForm}
          albums={this.state.albums}
          viewUserForm={this.viewUserForm}
        />
        <AddAlbum show={this.state.show} album={this.addAlbum} /> <br></br>
        {typeof this.state.items !== "undefined" && this.state.items !== null && (
          <div class="row">
            {this.state.items.map((item) => (
              <div class="col-sm-3 col-6 ">
                {" "}
                <Photo
                  key={item.id}
                  del={this.deletePhoto}
                  down={this.handleDownload}
                  fullsize={this.fullScreen}
                  filename={item.Filename}
                />{" "}
              </div>
            ))}
          </div>
        )}
        <div class={this.state.fullscreen}>
          {" "}
          <div class="escape">
            <div class="escape2">
              {" "}
              <button onClick={this.hide} class="btn btn-light">
                X
              </button>{" "}
            </div>{" "}
            <img class="imageFull" src={this.state.fullscreenUrl}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
