import React from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import '../assets/css/Contact.css'
import Navbar1 from '../components/Navbar1';


export default function Contact() {
  return (
    <>
    <Navbar1/>
      <ContactSection />
      <Footer/>
    </>
  );
}