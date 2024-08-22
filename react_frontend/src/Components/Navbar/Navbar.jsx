import * as React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to="/" className="app-title bold">Recipe App</Link>
        </div>
    );
}

export default Navbar;