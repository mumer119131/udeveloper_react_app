import React, { createRef, useRef, useState } from 'react'
import './nav.css'
import { useEffect } from 'react'
import WHITE_LOGO from '../../../assets/ud_logo_white.png'
import GRADIENT_LOGO from '../../../assets/ud_logo_gradient.png'

const Nav = () => {
  const [logo, setLogo] = useState(WHITE_LOGO)
  useEffect(()=>{
    var myNav = document.getElementById('nav_bar');
          var logo = document.getElementById('logo');
          window.onscroll = function () { 
              "use strict";
              if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
                  myNav.classList.add("nav__scroll");
                  setLogo(GRADIENT_LOGO);
              }else {;
                myNav.classList.remove("nav__scroll");
                setLogo(WHITE_LOGO);
              }
          }
  });

  return (

    <nav id="nav_bar">
        <img src={logo} alt="" id="logo" />
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#work_portion">Work</a></li>
            <li><a href="#team_portion">Team</a></li>
            <li><a href="#review_portion">Reviews</a></li>
            <li><a href="#gallery_portion">Gallery</a></li>
            <li><a href="#contact_portion">Contact</a></li>
        </ul>
            
    </nav>
  )
}

export default Nav