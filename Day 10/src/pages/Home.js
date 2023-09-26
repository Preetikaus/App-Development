import React from 'react';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Navbar1 from '../components/Navbar1';


function Home() {
  return (
    <>
    <Navbar1/>
    <HeroSection/>
    <Cards/>
    <Footer/>
    </>
  );
}

export default Home;