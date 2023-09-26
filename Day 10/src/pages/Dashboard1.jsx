import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import Layout1 from '../components/Layout1'
function Dashboard1() {
    const user=useSelector(selectUser)
    return (
        <>
            <Layout1/>
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Welcome <span className=' username-color'>{user.username} </span></h1>
                </div>

            </div>
        </>
    )
}

export default Dashboard1