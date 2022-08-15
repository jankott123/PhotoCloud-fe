import React from "react";
import { SocialIcon } from "react-social-icons";
import "./AccountBox.css";
const AccountBox = () => {
  return (
    <div>
      <div class="accountBoxBackground">
        <div class="row joinus">

          <div class="col-12 accBackground d-flex align-items-center justify-content-between">
            Join us now:
            <a href="/register" class="link-success signUp">
              Sign up
            </a>
          </div>

        </div>

        
        <br></br>
        <div class="row joinus">
          <div class="col-12 accBackground d-flex align-items-center justify-content-between">
           Already have an account?

            <a href="/login" class="link-success logIn">
              Log in
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <br class="homepageHide"></br>
      <div class="row gray">
        <h6>Follow us:</h6>{" "}
        <div class="col-2 col-sm-1">
          {" "}
          <SocialIcon url="https://www.facebook.com/" />{" "}
        </div>
        <div class="col-2 col-sm-1">
          {" "}
          <SocialIcon url="https://www.twitter.com/" />{" "}
        </div>
        <div class="col-2 col-sm-1">
          {" "}
          <SocialIcon url="https://www.instagram.com/" />{" "}
        </div>
      </div>
    </div>
  );
};

export default AccountBox;
