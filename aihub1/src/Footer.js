import React from 'react'
import {Link} from 'react-router-dom';
import { BiLogoInstagram } from "react-icons/bi";
import { RiThreadsFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='Footer'>
            <h3>About</h3>
            <Link to='about' className='footerLink about1'>AI HUB</Link>
        </div>
        <div className='Footer'>
            <h3>Organisations</h3>
            <Link to='about' className='footerLink about1'>AG DEVELOPERS</Link>
        </div>
        <div className='Footer'>
            <h3>Contact</h3>
            <p>E-mail: agdeveloperss@gamil.com</p>
            <p>Mobile:9790665224</p>
        </div>
        <div className='Footer'>
            <h3>Follow AG DEVELOPERS</h3>
            <div className='footLogo'>
                <BiLogoInstagram />
                <a href="https://www.instagram.com/agdevops?igsh=eGM0MGYzcXN6c2Jj">Instagram</a>
            </div>
            <div className='footLogo'>
                <FaXTwitter />
                <a href="https://x.com/AGdevopss?t=R5FgHL8hB89gtolYMVcvYQ&s=08">Twitter</a>
            </div>
        </div>
    </div>
  )
}

export default Footer