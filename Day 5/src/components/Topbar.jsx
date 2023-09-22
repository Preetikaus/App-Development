import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import '../Assets/CSS/Bars.css'


function Topbar() {
const user=useSelector(selectUser)

    return (
        <>
            <div className='topbar'>
                <h1 className='user username-color'>{user ? user.email : 'Guest'}</h1>
            </div>
        </>
    )
}

export default Topbar