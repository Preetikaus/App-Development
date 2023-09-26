import React from 'react';
import '../assets/css/HeroSection.css';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='../assets/videos/video-2.mp4' autoPlay loop muted />
      <h1>ProAutoCare</h1>
      <p>Engineered for Reliability, Crafted with Care.</p>
      <div className='hero-btns'>
        <Link to="https://www.youtube.com/">
          <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
           WATCH TRAILER<i className='far fa-play-circle' />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;