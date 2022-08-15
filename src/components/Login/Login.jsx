import React, { Component } from "react";
import auth from "../../services/Auth";
import { withRouter } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginFailed: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  loginTest = (e) => {
    e.preventDefault();

    auth
      .login(this.state)
      .then((result) => {
        sessionStorage.setItem("prihlasen", "true");

        const { history } = this.props;
        history.push("/welcome");
      })
      .catch((error) => {
        this.setState({
          loginFailed: "Login Failed: Your username or password is incorrect",
        });
      });
  };

  render() {
    return (
      <div class="container">
        <br></br>
        <div class="row justify-content-center">
          <div class="col-sm-5 col-11">
            <form method="POST" class="loginForm">
              <div className="form-group">
                <h2 class="center">Login</h2>

                <div>
                  <p>{this.state.apiKey}</p>
                </div>
                <label for="exampleInputEmail1">Username:</label>
                <input
                  size="35"
                  type="name"
                  className="form-control"
                  name="username"
                  id="exampleInputEmail1"
                  placeholder="Enter username..."
                  onChange={this.onChange}
                />
              </div>
              <br></br>
              <div className="form-group">
                <label for="exampleInputPassword1">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={this.onChange}
                />
                <small className="form-text text-muted">
                  Never share your password with anyone else.
                </small>
              </div>

              <div class="loginButtonDiv">
                <br></br>
                <button
                  type="submit"
                  class="btn btn-info loginButton "
                  onClick={this.loginTest}
                >
                  Log in
                </button>
              </div>

              <br></br>
              <p style={{ color: "red" }}>{this.state.loginFailed}</p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
