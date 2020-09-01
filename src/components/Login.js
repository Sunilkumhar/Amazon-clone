import React from "react";
import "../css/Login.css";
import loginlogo from "../images/loginlogo.png";

function Login() {
  return (
    <div className="login">
      <img src={loginlogo} alt="loginlogo" />
      <div className="logincard">
        <p>Sign-In</p>
        <form action="/">
          <h6>Email (phone for mobile accounts)</h6>
          <input type="email" required />
          <h6>Password</h6>
          <input type="text" required />
          <button className="btn btn-block">Continue</button>
        </form>

        <div className="terms">
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </div>
        <div className="help">
          <i className="fas fa-caret-right"></i>
          <div className="helpme">
            <p>Need help?</p>
          </div>
        </div>
      </div>
      <div className="new">
        <p>New to Amazon?</p>
      </div>
      <div className="createacc">
        <button className="btn ">
          <p>Create your Amazon account</p>
        </button>
      </div>
      <div className="footer1">
        <div className="conditions">
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Help</p>
        </div>
        <p>© 2020 Amazon clone! No rights reserved - this is a demo!</p>
      </div>
    </div>
  );
}

export default Login;
