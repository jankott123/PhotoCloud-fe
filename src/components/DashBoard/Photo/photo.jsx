import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ImageGroup, Image } from "react-fullscreen-image";
import Authorization, { hasAccess } from "../../../services/Authorization";
import "./Photo.css";
class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promise: "",
      class: "deletePhoto",
      class2: "downloadPhoto",
      loaded: false,
    };
  }

  onMouse = (e) => {
    this.setState({ class: "deletePhotoVisible" });
    this.setState({ class2: "downloadPhotoVisible" });
  };

  onLeave = (e) => {
    this.setState({ class: "deletePhoto" });
    this.setState({ class2: "downloadPhoto" });
  };


  photoLoad = () => {
    this.setState({
      loaded:true,
    })
  }

  render() {
    return (
      <div>
        <div
          className="cont"
          onMouseLeave={(e) => this.onLeave()}
          onMouseEnter={(e) => this.onMouse()}
          onTouchStart={(e) => this.onMouse()}
        >
          
          <img
            className="img-fluid basicPhoto"
            style={this.state.loaded ? { display: 'inline-block' } : { display: 'none' }}
            src={
              process.env.REACT_APP_APISERVER + "view/" +
              this.props.filename
            }
            onLoad={this.photoLoad}
            alt={this.props.filename}
            onDoubleClick={() => this.props.fullsize(this.props.filename)}
          ></img> 

          <div
            className={this.state.class}
            onClick={() => this.props.del(this.props.filename)}
          >
            {" "}
            <button class="btn"> Smazat</button>{" "}
          </div>
          <div
            onClick={() => this.props.down(this.props.filename)}
            className={this.state.class2}
          >
            {" "}
            <button class="btn"> Stahnout</button>{" "}
          </div>
          <div> </div>
        </div>
        {console.log(this.state.loaded)}
      </div>
    );
  }
}

export default Photo;
