import React from 'react';
import './Header.css';
import Logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header className='header-container'>
            <div className='logo'>
                   <Link to='/'><img  src={Logo} alt='LogoHappyTravel'/></Link>
            </div>

            <h1>Happy Travel</h1>
        </header>
    );    
};

export default Header;
