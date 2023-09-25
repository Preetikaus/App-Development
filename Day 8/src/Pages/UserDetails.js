import React from 'react'
import '../Assests/CSS/UserDetails.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const UserDetails = () => {
    const user = useSelector(selectUser);
  return (
    <div >
      <h1>User Details</h1>
      <div className="column-26">
          <div className="form-input-group32">
            <div className="input-group16">
                <h1>
                    Name: {user.name}
                    Email: {user.email}
                    Phone: 234567890
                    Address: 123 Main Street, Anytown, USA
                    Vehicle: Vehicle Information:
                    <br/>
                    Make and Model: Toyota Camry
                    <br/>
                    Vehicle Identification Number (VIN): 1HGCM82633A123456
                    <br/>
                    License Plate Number: ABC123
                </h1>

            </div>
        </div>
        </div>
    </div>
  )
}

export default UserDetails;
