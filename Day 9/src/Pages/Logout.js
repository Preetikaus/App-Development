import React from 'react'
import '../Assests/CSS/Logout.css'; 
import Leftbar from '../components/Leftbar.jsx';
import Topbar from '../components/Topbar';

const Logout = () => {


  return (
    <div className='logout'>
      <Leftbar/>
      <Topbar/>
    </div>
  )
}

export default Logout