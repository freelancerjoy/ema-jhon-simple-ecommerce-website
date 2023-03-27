import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='menu-items'>
                <a href="/order">Order</a>
                <a href="/OrderReview">OrderReview</a>
                <a href="/Manage Invetory">Manage Invetory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;