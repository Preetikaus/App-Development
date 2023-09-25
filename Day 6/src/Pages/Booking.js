import React, { useState } from "react";
import "../Assests/CSS/Booking.css";
// import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [typeS, setTypeS] = useState("");
  
  const handleChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const handleChangeLocation = (e) => {
    const value = e.target.value;
    setLocation(value);
  };
  const handleChangeVehicle = (e) => {
    const value = e.target.value;
    setVehicle(value);
  };
  const handleChangeService = (e) => {
    const value = e.target.value;
    setTypeS(value);
  };
 

  return (
    <div className="container13">
      <h1>Register</h1>
      
      <div className="column-23">
        <form>
          <div className="form-input-group3">
            <div className="input-group13">
              <div className="form-input13">
                <input
                  required
                  type="text"
                  placeholder="Enter your date"
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
                  placeholder="Enter your Location"
                  value={location}
                  onChange={handleChangeLocation}
                />
              </div>
            </div>
            <div className="input-group13">
              <div className="form-input13">
                <input
                  required
                  type="text"
                  placeholder="Enter your Vehicle Information"
                  value={vehicle}
                  onChange={handleChangeVehicle}
                />
              </div>
            </div>
            <div className="input-group13">
              <div className="form-input13">
                <input
                  required
                  type="text"
                  placeholder="Enter your required Service"
                  value={typeS}
                  onChange={handleChangeService}
                />
              </div>
            </div>
            <div className="input-submit3">
              <button className="form-input-btn23" type="submit">
                <strong>Register</strong>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}