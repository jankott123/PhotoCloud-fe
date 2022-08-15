import React, { Component } from "react";
import Authorization, { hasAccess } from "../../../services/Authorization";


class ShareAlbum extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  shareAlbum = async (event, props) => {
    event.preventDefault();
    await hasAccess();

    const data = new FormData(event.target);
    
    fetch(process.env.REACT_APP_APISERVER+"share", {
      method: "POST",
      credentials: "include",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result == "UserNotExist") {
          alert("User not exist");
        }
      });
  };

  render() {
    return (
      <div class="row">
        <div class="col-7"> </div>
        <div class="col-5">
          <form class={this.props.css} onSubmit={(e) => this.shareAlbum(e)}>
            <div class="form-group formgroupUser d-flex flex-row bd-highlight">
              <div class="col-5 mb-3 userinput">
                <input
                  type="text"
                  name="userName"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter username"
                />
              </div>

              <div class="col-4  mb-3 userselect">
                <select
                  class="form-select "
                  name="sharedAlbum"
                  aria-label="Default select example"
                >
                  <option value="" disabled selected>
                    Select album
                  </option>

                  {typeof this.props.albums !== "undefined" &&
                    this.props.albums.map((album) => (
                      <option value={album.id}>{album.name}</option>
                    ))}
                </select>
              </div>
              <div class="col-3">
                <button
                  class="btn btn-primary"
                  onClick={() => this.props.viewUserForm("hide")}
                  type="submit"
                >
                  {" "}
                  Share
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ShareAlbum;
