import React, { Component } from "react";
class Header2 extends Component {
  state = {};    
  render() {
    return (

      
      <div class="container">
   
        <div class="row d-flex flex-row bd-highlight mb-3 header">
          <div class="col-sm-7 d-flex flex-row bd-highlight">
            <h1 class="photostoragenadpis">Photo storage</h1>
            <img class="cloudImage" src="cloud.png" alt="Italian Trulli"></img>
           
          </div>
        </div>
        <hr class="line" />
      </div>
    );
  }
}

export default Header2;
