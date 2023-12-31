import React, { useState } from "react";
import "../Assests/CSS/Login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
      name: name,
      email: email, 
      password: password,
      loggedIn: true,
    })
    );
  };


  return (
    <div className="container1">
      <h1>Welcome to ProAutoCare</h1>
      
      <div className="column-2">
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-group1">
              <div className="form-input1">
                <input
                  required
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={handleChangeName}
                />
              </div>
            </div>
          <div className="form-input-group">
            <div className="input-group1">
              <div className="form-input1">
                <input
                  required
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleChangeEmail}
                  onSubmit={(e) => handleSubmit(e)}
                  autoComplete="on"
                />
              </div>
            </div>
            <div className="input-group1">
              <div className="form-input1">
                <input
                  required
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleChangePassword}
                  onSubmit={(e) => handleSubmit(e)}
                />
              </div>
            </div>
            <div className="input-submit">
            <button className="form-input-btn2" type="submit">
                <strong>Login</strong>
              </button>
            </div>
            <div>
            <p>Don't have an account?</p>
            <Link to="/signup"><button className="form-input-btn2" type="submit">
                <strong>Sign up</strong>
              </button></Link>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
  }