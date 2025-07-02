import * as React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">Saffron</Link>
                <span className="navbar-tagline">Quick &amp; Easy Recipes</span>
            </div>
        </nav>
    );
}

export default Navbar;
