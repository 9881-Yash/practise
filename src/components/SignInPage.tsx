import React from "react";
import "./UserStyle.css";

const SignInPage = () => {
  return (
    <>
      <div className="card card-shadow">
        <div className="container">
          <div className="signup-heading">Login</div>
          <div className="fields">
            <div className="Email">
              <div className="form-label"> E-mail </div>
              <input
                className="form-label-value"
                placeholder="please enter e-mail"
              ></input>
            </div>
            <div className="Password">
              <div className="form-label"> Password </div>
              <input
                className="form-label-value"
                placeholder="please enter password"
              ></input>
            </div>

            <div className="submit-button">
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignInPage;
