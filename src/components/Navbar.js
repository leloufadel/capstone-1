import React from 'react';
import './stylesheets/navbar.css';
import semlessLogo from '../Assets/iconsemless.gif';


const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
    <img className="logo-img" src={semlessLogo} alt="logo" />

    </div>
    <div className="nav-items">
      <ul className="overview">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Guests</a></li>
        <li><a href="/">Events</a></li>

      </ul>
      <ul className="account">
        <li><a href="/">Register</a></li>
        <li><a href="/">Language</a></li>
      </ul>
    </div>
  </nav>

);
export default Navbar;
