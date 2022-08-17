import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./UploadForm.css"
class UploadForm extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="fileUpload">
        <form
          class="d-flex justify-content-start "
          onSubmit={this.props.refresh}
        >
          <label for="file-upload" class="file-upload">
            Choose image...
          </label>

          <select
            placeholder="Select album"
            class="form-control-sm albumSelect"
            name="selection"
            aria-label="Default select example"
          >
            <option value="empty" disabled selected>
              Select your album
            </option>
            <option value="null">All photos</option>
            {typeof this.props.options !== "undefined" &&
              this.props.options.map((album) => (
                <option value={album.id}>{album.name}</option>
              ))}
          </select>

          <input
            id="file-upload"
            class="input-file"
            type="file"
            accept="video/*, image/*, image/heic"
            name="fileUpload[]"
            multiple="multiple"
          />
          <button class="btn btn-primary send">Upload</button>
        </form>
      </div>
    );
  }
}
export default UploadForm;
