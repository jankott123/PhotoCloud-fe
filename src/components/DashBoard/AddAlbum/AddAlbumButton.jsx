import React from "react";


const AddAlbumButton = (props) => { 

    return ( 
        <button
        type="button"
        onClick={props.showForm}
        class="btn btn-info plusButton"
      >
        +
      </button>
    )
}

export default AddAlbumButton;