import React, { Component } from "react";
import Cookies from "universal-cookie";
import   { hasAccess } from "../../services/Authorization";
import { withRouter } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  state = {
    username: "",
    showLogout: "hide",
    showLogoutMobile: "hide",
  };

  componentDidMount() {
    const cookies = new Cookies();
    const username = cookies.get("username");

    this.setState({
      username: username,
    });
  }

  logOut = async () => {
    await hasAccess();

    fetch(process.env.REACT_APP_APISERVER + "logout", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        sessionStorage.removeItem("prihlasen");
        const { history } = this.props;
        history.push("/");
      });
  };

  showMenu = () => {
    if (this.state.showLogout === "hide") {
      this.setState({
        showLogout: "logout align-items-center flex-column d-flex",
        showLogoutMobile: "col-12 mobileLogOut d-flex justify-content-center",
      });
    } else {
      this.setState({
        showLogout: "hide",
        showLogoutMobile: "hide",
      });
    }
  };

  render() {
    return (
      <div>
        <div class="container hideDesktop">
          <div class="d-flex center2 flex-column">
            {" "}
            <img
              onClick={() => this.showMenu()}
              class="profile"
              src="user.png"
              alt="Italian Trulli"
            ></img>
            <small>{this.state.username}</small>
          </div>

          <div className="row">
            <div class={this.state.showLogoutMobile}>
              <button type="button" className="btn btn-secondary btn-sm">
                Settings
              </button>{" "}
              |{" "}
              <button
                type="button"
                onClick={() => this.logOut()}
                class="btn btn-success btn-sm"
              >
                Log out
              </button>
            </div>
          </div>
        </div>

        <div class="container mobileHide">
          <div class="row header">
            <div class="col-8 d-flex pb-n6">
              <h1>Photo storage</h1>
              <img
                class="cloudImage"
                src="cloud.png"
                alt="Italian Trulli"
              ></img>
            </div>

            <div class="col-4 d-flex justify-content-end">
              <div
                class="d-flex backgroundUser align-items-center flex-column"
                onClick={() => this.showMenu()}
              >
                {" "}
                <img class="profile" src="user.png" alt="Italian Trulli"></img>
                <div class="backgroundUser2"> {this.state.username}</div>{" "}
              </div>

              <div class={this.state.showLogout}>
                <div class="col-12">
                  <button type="button" className="btn btn-secondary btn-sm">
                    Settings
                  </button>{" "}
                  |{" "}
                  <button
                    type="button"
                    onClick={() => this.logOut()}
                    className="btn btn-success btn-sm"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr class="line" />
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
