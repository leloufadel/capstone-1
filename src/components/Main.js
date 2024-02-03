import React from 'react';
import './stylesheets/navbar.css';
import conferenceLogo from '../Assets/Conference.jpg';

const Navbar = () => (
  <section className="navbar">
    <div className="logo">
      <img className="bg-img" src={conferenceLogo} alt="logo" />
    </div>
  </section>

);
export default Navbar;
