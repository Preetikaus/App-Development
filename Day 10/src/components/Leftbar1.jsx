import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import '../assets/css/Bars.css'

function Leftbar1() {

    const dispatch= useDispatch();
    const navigate=useNavigate();

const adminHandler = ()=>{
    navigate('/Dashboard1')
}
const usersHandler = ()=>{
    navigate('/Users')
}
const policiesHandler = () =>{
    navigate('/Policies')
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
                    <button className='left-bar-button nav-btn' onClick={adminHandler}>
                        Admin 
                    </button>
                    <button className='left-bar-button nav-btn' onClick={usersHandler}>
                        Users
                    </button>
                    <button className='left-bar-button nav-btn' onClick={policiesHandler}>
                        Policies
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

export default Leftbar1