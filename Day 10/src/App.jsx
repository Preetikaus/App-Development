import React from 'react';
import './assets/css/App.css';
import Home from './pages/Home';
import {Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/Privacy';
import FAQs from './pages/FAQ';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import Upcoming from './pages/Upcoming';
import Login1 from './pages/Login1';
import Dashboard1 from './pages/Dashboard1';
import Users from './pages/Users';
import Policies from './pages/Policies';

function App() {
  return (
    <div>
      <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/login1" element={<Login1/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/terms" element={<Terms/>}/>
        <Route exact path="/privacy" element={<PrivacyPolicy/>}/>
        <Route exact path="/faq" element={<FAQs/>}/>
        <Route exact path='/Dashboard' element={<Dashboard/>} />
        <Route exact path='/Dashboard1' element={<Dashboard1/>} />
        <Route exact path='/users' element={<Users/>} />
        <Route exact path='/policies' element={<Policies/>} />
        <Route exact path='/Upcoming' element={<Upcoming/>} />
        <Route exact path='/History' element={<History/>} />
      </Routes>
      
      </>
    </div>
  );
}

export default App;