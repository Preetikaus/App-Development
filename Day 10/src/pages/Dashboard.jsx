import React from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
function Dashboard() {
    const user=useSelector(selectUser)
    return (
        <>
            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Welcome <span className=' username-color'>{user.username} </span></h1>
                    <p><strong>
                        Contact Information:
                        <br/>
                        Email Address: {user.username}@example.com
                        <br/>
                        Phone Number: (555) 123-4567 
                        <br/>
                        Password: [Secure password]
                        <br/>
                        Address: 123 Main Street, Anytown, USA
                        <br/>
                        Vehicle Information:
                        <br/>
                        Make and Model: Toyota Camry
                        <br/>
                        Vehicle Identification Number (VIN): 1HGCM82633A123456
                        <br/>
                        License Plate Number: ABC123
                        </strong></p>
                </div>

            </div>
        </>
    )
}

export default Dashboard