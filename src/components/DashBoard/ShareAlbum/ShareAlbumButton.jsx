import React from "react";
import "./ShareAlbumButton.css";
const ShareAlbumButton = (props) => {
  return (
    <button
      type="button"
      onClick={() => props.viewUserForm("")}
      class="btn btn-warning shareButton"
    >
      <img src="share.png" class="sharepng"></img>
    </button>
  );
};

export default ShareAlbumButton;