import React, { Component } from "react";
import { PostData } from "../../services/PostData";
import { withRouter } from "react-router-dom";
import RegisterAPI, { registerApi } from "./RegisterAPI";
import "./Register.css";
class Register extends Component {
  state = {
    complete: "",
    user: "",
    emailex: "",
    emailval: "",
    userval: "",
    pass: "",
    hideForm: "",
    hideLink: "hide",
  };

  register = (event, registerApi) => {
    this.setState({
      complete: "",
      user: "",
      emailex: "",
      emailval: "",
      userval: "",
      pass: "",
    });

    event.preventDefault(event);
    registerApi(event).then((val) => {

    if (val === "Please complete the registration form!") {
      this.setState({
        complete: val,
      });
    }

    if (val === "User is already exists") {
      this.setState({
        user: val,
      });
    }

    if (val === "Email is already exists") {
      this.setState({
        emailex: val,
      });
    }

    if (val === "Email is not valid") {
      this.setState({
        emailval: val,
      });
    }

    if (val === "Username is not valid") {
      this.setState({
        userval: val,
      });
    }

    if (val === "Password must be between 8 and 20 characters long!") {
      this.setState({
        pass: val,
      });
    }
    if (val === "ok") {
      this.setState({
        hideLink: "",
        hideForm: "hide",
      });
    }
  })
}

  render() {
    return (
      <div>
        <div class={this.state.hideLink}>
          <div class="container ">
            <div class="row justify-content-center">
              <div class="col-6 containerSuccess">
                <br></br>
                <h4 class="h">
                  Your{" "}
                  <span class="colorgreen"> registration was successful.</span>{" "}
                </h4>

                <h5 class="h">
                  Please active your account via{" "}
                  <span class="color">email</span>.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div class={this.state.hideForm}>
          <div class="container">
            <br></br>
            <div class="row justify-content-center">
              <div class="col-sm-6 col-11">
                <form
                  method="POST"
                  onSubmit={(e) => this.register(e, registerApi)}
                  class="registrationForm"
                >
                  <div className="form-group">
                    <h4 class="display-6"> Registration form </h4>
                    <hr></hr>
                    <label>Username:</label>
                    <input
                      size="40"
                      type="name"
                      className="form-control"
                      name="username"
                      placeholder="Enter your username..."
                    />
                    <small class="formvalid">
                      {this.state.user} {this.state.userval}
                    </small>
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="exampleInputPassword1"
                      placeholder="Enter your password..."
                    />
                    <small class="formvalid">{this.state.pass}</small>
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email..."
                    />
                    <small class="formvalid">
                      {this.state.emailex} {this.state.emailval}
                    </small>

                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <small class="formvalid">{this.state.complete} </small>
                  <div class="registerButtonDiv">
                    <br></br>
                    <button
                      type="submit"
                      class="btn btn-success registerButton"
                      onClick={this.loginTest}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
