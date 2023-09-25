import React, { useState } from "react";
import "../Assests/CSS/Signup.css";
// import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  
  const handleChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const handleChangeNumber = (e) => {
    const value = e.target.value;
    setContact(value);
  };
  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleChangeCPassword = (e) => {
    const value = e.target.value;
    setCPassword(value);
  };
  const handleChangeAddress = (e) => {
    const value = e.target.value;
    setAddress(value);
  };
  const handleChangePincode = (e) => {
    const value = e.target.value;
    setPincode(value);
  };

  return (
    <div className="container13">
      <h1>Sign up</h1>
      
      <div className="column-23">
        <form>
          <div className="form-input-group3">
            <div className="input-group13">
              <div className="form-input13">
                <input
                  required
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={handleChangeName}
                  autoComplete="on"
                />
              </div>
            </div>
            <div className="input-group13">
              <div className="form-input13">
                <input
                  required
                  type="text"
                  placeholder="Enter your Number"
                  value={contact}
                  onChange={handleChangeNumber}
                />
              </div>
            </div>
            <div className="input-group13">
              <div className="form-input13">
                <input
                  required
                  type="email"
                  placeholder="Enter your Email ID"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>
            </div>
            <div className="input-group13">
              <div className="form-input13">
                <input
                  required
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={handleChangePassword}
                />
              </div>
            </div>
            <div className="input-group13">
              <div className="form-input13">
                <input
                  required
                  type="password"
                  placeholder="Confirm your Password"
                  value={cpassword}
                  onChange={handleChangeCPassword}
                />
              </div>
            </div>
            <div className="input-group13">
              <div className="form-input13">
                <input
                  required
                  type="text"
                  placeholder="Enter your Address"
                  value={address}
                  onChange={handleChangeAddress}
                />
              </div>
            </div>
            <div className="input-group13">
              <div className="form-input13">
                <input
                  required
                  type="text"
                  placeholder="Enter your Pincode"
                  value={pincode}
                  onChange={handleChangePincode}
                />
              </div>
            </div>
            <div className="input-submit3">
              <button className="form-input-btn23" type="submit">
                <strong>Sign In</strong>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}