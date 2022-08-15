import React from "react";


const SelectAlbum = (props) => {

    return (

        <div class="dropdown btn-group">
              <button
                class="btn btn-secondary dropdownbutton   dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.albtoogle}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  {" "}
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => props.getAllPhotos({})}
                  >
                    {" "}
                    {props.albtoogle2}
                    <hr class="line"></hr>
                  </a>
                </li>
                {typeof props.albums !== "undefined" &&
                  props.albums.map((album) => (
                    <li class="mb-2 mt-1">
                      {" "}
                      <a
                        class="dropdown-item displayDropdown"
                        href="#"
                        onClick={() => props.viewAlbum({ album })}
                      >
                        {album.name}
                      </a>
                      <button
                        onClick={() => props.albumDelete({ album })}
                        class="btn btn-danger btn-sm buttonDelete"
                      >
                        {" "}
                        <img class="deleteSvg" src="delete.svg"></img>{" "}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
    );
}

export default SelectAlbum;