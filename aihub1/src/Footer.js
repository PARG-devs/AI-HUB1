import React from 'react'
import {Link} from 'react-router-dom';

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
            <a href="https://www.instagram.com/parg_developers/">Instagram</a>
        </div>
    </div>
  )
}

export default Footer