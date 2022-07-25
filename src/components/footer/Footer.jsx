import React from 'react'
import './footer.css'
import logo from '../../assets/ud_logo_white.png'
const Footer = () => {
  return (
    <footer>
        <div class="footer__main">
            <div class="footer__logo">
                <img src={logo} alt="" />
                <h2>U Developers</h2>
                <p>" Building Your Dreams To Reality "</p>
            </div>
            <div class="footer__navigation">
                <h2>Navigation</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer__support">
                <h2>Support</h2>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Copyrights</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Signin</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer__functions">
                <h2>Functions</h2>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Copyrights</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Signin</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
        <h5 class="bottom__footer">&copy;2022 Copyright Reserved By Muhammad Umer</h5>
    </footer>
  )
}

export default Footer