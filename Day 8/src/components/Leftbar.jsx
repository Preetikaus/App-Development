import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Assests/CSS/Bars.css'
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

function Leftbar() {
    const navigate=useNavigate();

const dashboardHandler = ()=>{
    navigate('/UserDetails')
}
const bookingHandler = ()=>{
    navigate('/Booking')
}
const upcomingHandler = () =>{
    navigate('/Upcoming')
}
const dispatch = useDispatch();
const handleLogout = (e) => {
    e.preventDefault();
    
    dispatch(logout());
};
    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                    <button className='left-bar-button nav-btn' onClick={dashboardHandler}>
                        User Details
                    </button>
                    <button className='left-bar-button nav-btn' onClick={bookingHandler}>
                    Booking
                    </button>
                    <button className='left-bar-button nav-btn' onClick={upcomingHandler}>
                    Upcoming
                    </button>
                    <button className='left-bar-button nav-btn' onClick={handleLogout}>
                    Logout
                    </button>

                </div>
            </div>
        </>
    )
}

export default Leftbar