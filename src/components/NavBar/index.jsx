import React from 'react';
import { Link } from 'react-router-dom';
import ubcLogo from '../../images/ubcLogo.png';
import './styles.css';

const NavBar = (props) => {
  return (
    <div className = "outerContainer">
        <div className= "navContainer">
            <div className = "imageContainer">
                <Link className='imageContainer' to="/">
                    <img src = {ubcLogo} alt="UBC Logo"/>
                </Link>
            </div>
            <ul className="navbar">
                <Link className = 'link' to="/"> Home </Link>
                <Link className = 'link' to="/about"> About </Link>
            </ul>  
        </div>   
    </div>
  );
};

export default NavBar;