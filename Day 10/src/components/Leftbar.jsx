import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import '../assets/css/Bars.css'

function Leftbar() {

    const dispatch= useDispatch();
    const navigate=useNavigate();

const UserHandler = ()=>{
    navigate('/Dashboard')
}
const historyHandler = ()=>{
    navigate('/History')
}
const appointmentsHandler = () =>{
    navigate('/Upcoming')
}
const backHomeHandler = () =>{
    navigate('/')
}
const logoutHandler = () =>{
    dispatch(logout())
    navigate('/')
}
    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                    <button className='left-bar-button nav-btn' onClick={UserHandler}>
                        User Details
                    </button>
                    <button className='left-bar-button nav-btn' onClick={appointmentsHandler}>
                        Upcoming
                    </button>
                    <button className='left-bar-button nav-btn' onClick={historyHandler}>
                        History
                    </button>
                    <button className='left-bar-button nav-btn' onClick={backHomeHandler}>
                        Return Home
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