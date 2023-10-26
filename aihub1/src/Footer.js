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
            <Link to='about' className='footerLink about1'>PARG DEVELOPERS</Link>
        </div>
        <div className='Footer'>
            <h3>Contact</h3>
            <p>E-mail: pargdevelopers@gamil.com</p>
            <p>Mobile:9790665224</p>
        </div>
        <div className='Footer'>
            <h3>Follow PARG DEVELOPERS</h3>
            <div className='footLogo'>
                <BiLogoInstagram />
                <a href="https://www.instagram.com/parg_developers/">Instagram</a>
            </div>
            <div className='footLogo'>
                <RiThreadsFill />
                <a href="https://www.instagram.com/parg_developers/">Threads</a>
            </div>
            <div className='footLogo'>
                <FaXTwitter />
                <a href="https://www.instagram.com/parg_developers/">Twitter</a>
            </div>
        </div>
    </div>
  )
}

export default Footer