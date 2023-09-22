import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Assets/CSS/Bars.css'
import { logout } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

function Leftbar() {
    const dispatch= useDispatch();
    const navigate=useNavigate();

const dashboardHandler = ()=>{
    navigate('/Dashboard')
}
const settingsHandler = ()=>{
    navigate('/UpcomingAppointments')
}
const usersHandler = () =>{
    navigate('/PreviousAppointments')
}
const paymentHistoryHandler = () =>{
    navigate('/PaymentHistory')
}
const usedServicesHandler = () =>{
    navigate('/ServicesUsed')
}
const logoutHandler = () =>{
    dispatch(logout())
    navigate('/')
}
    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                    <button className='left-bar-button nav-btn' onClick={dashboardHandler}>
                        Dashboard
                    </button>
                    <button className='left-bar-button nav-btn' onClick={usersHandler}>
                    Upcoming Appointments
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                    Previous Appointments
                    </button>
                    <button className='left-bar-button nav-btn' onClick={paymentHistoryHandler}>
                    Payment History
                    </button>
                    <button className='left-bar-button nav-btn' onClick={usedServicesHandler}>
                    Services Used
                    </button>
                    <button className='left-bar-button-logout nav-btn' onClick={logoutHandler}>
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}

export default Leftbar