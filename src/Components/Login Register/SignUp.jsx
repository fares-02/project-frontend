import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/Actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import "./LogReg.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ email, password }, navigate));
  };
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Card</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div id="card">
          <div id="card-content">
            <div id="card-title">
              <h2>SIGN UP</h2>
              <div className="underline-title" />
            </div>
            <form method="post" className="form">
              <label htmlFor="user-email" style={{ paddingTop: "13px" }}>
                &nbsp;Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="user-email"
                className="form-content"
                type="email"
                name="email"
                autoComplete="on"
                required
              />
              <div className="form-border" />
              <label htmlFor="user-password" style={{ paddingTop: "22px" }}>
                &nbsp;Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="user-password"
                className="form-content"
                type="password"
                name="password"
                required
              />
              <div className="form-border" />
              <input
                id="submit-btn"
                type="submit"
                name="submit"
                value="REGISTER"
                onClick={handleRegister}
              />
              <Link to="/signIn" id="signup">
                Already have an account ?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
