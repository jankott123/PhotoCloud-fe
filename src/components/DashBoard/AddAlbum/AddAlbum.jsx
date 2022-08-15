import React, { Component } from "react";
class AddAlbum extends Component {
  state = {};

  render() {
    return (
      <div class="row">
        <div class="col-9"> </div>
        <div class="addAlbum col-3 align-self-end ">
          <form class={this.props.show} onSubmit={this.props.album}>
            <div class="form-group row justify-content-end">
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  name="albumName"
                  id="formGroupExampleInput"
                  placeholder="Enter album name"
                />{" "}
              </div>
              <div class="col-4">
                {" "}
                <button class="btn btn-primary">Create</button>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddAlbum;
