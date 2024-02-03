import React from "react";
import './stylesheets/navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar">
        <div class="logo">My Website</div>
        <ul class="nav-items">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Guests</a></li>
        <li><a href="/">Events</a></li>

    </ul>
    <ul>
        <li><a href="/">Register</a></li>
        <li><a href="/">Language</a></li>
    </ul>
    </nav>

    )

}
export default Navbar;