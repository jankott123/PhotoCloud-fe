import React from "react";
import AccountBox from "./AccountBox/AccountBox";
import Intro from "./Intro/Intro";
import "./LeftColumn.css"
const LeftColumn = () => {
    return (
        <div class="col-12 col-sm-6">
              {" "}
                <Intro />
              <div class="col-12 d-flex  flex-row ">
                <div class="col-6">
                  <img
                    src="ocean.jpg"
                    class="img-thumbnail hidePc rounded"
                  ></img>
                </div>
                <div class="col-6">
                  <img
                    src="bee.jpg"
                    class="img-thumbnail hidePc homeimage"
                  ></img>
                </div>
              </div>
              <div class="col-12 d-flex  flex-row ">
                <div class="col-6">
                  <img
                    src="woman.jpg"
                    class="img-thumbnail hidePc rounded"
                  ></img>
                </div>
                <div class="col-6">
                  <img
                    src="cat.jpg"
                    class="img-thumbnail hidePc rounded homeimage"
                  ></img>
                </div>
              </div>
                <AccountBox />
            </div>

    )
}

export default LeftColumn;