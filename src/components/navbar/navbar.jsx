import React, { Component } from 'react';
import logo from '../../images/icon.png'

import './navbar-styles.css'


export default function NavBar() {
    


// if(hamburger){ 
// hamburger.addEventListener("click", mobileMenu, false);
// }
    // hamburger.addEventListener("click", mobileMenu);


    function mobileMenu() {
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".navbar-menu");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    }


    return(
        <div className="navbar-main">
            {
                
            }
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className='navbar-links'>
                <ul className='navbar-menu'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
                <div className="hamburger" onClick={mobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>

                
        </div>

    )
}