import React, { Component } from "react";
import LeftColumn from "./LeftColumn/LeftColumn";
import "./Home.css"
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <br class="homepageHide"></br>
        <div class="container">
          <br class="homepageHide"></br>
          <div class="row">
            <LeftColumn />
            <div class="col-3 homepageHide">
              <br></br>
              <img src="ocean.jpg" class="img-thumbnail rounded"></img>

              <img src="bee.jpg" class="img-thumbnail homeimage"></img>
            </div>

            <div class="col-3 homepageHide">
              <br></br>
              <img src="woman.jpg" class="img-thumbnail rounded"></img>

              <img src="cat.jpg" class="img-thumbnail rounded homeimage"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
