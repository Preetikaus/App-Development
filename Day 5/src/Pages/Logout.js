import React from 'react'
import '../Assets/CSS/Logout.css';

import { logout } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import Leftbar from '../components/Leftbar';
import Topbar from '../components/Topbar';

const Logout = () => {

  const user = useSelector(selectUser);

const dispatch = useDispatch();
const handleLogout = (e) => {
    
};
  return (
    <div className='logout'>
      <Leftbar/>
      <Topbar/>
      <div className="container3">
      <h1 className="user_name">
        Welcome <span className='user_name'> {user.name} </span>
      </h1>
        
    </div>
    </div>
  )
}

export default Logout