import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
const Contact = ({navigate}) => {
  return (
    <div className='contact'>
        <span className='aboutTop contactTop contactTopAnimation'>
            <h1>CONTACT US</h1>
            <AiOutlineCloseCircle 
                onClick={()=>navigate('/')}
            />
        </span>
        <div className='contactBox'>
            <div className='contactList'>
                <p className="aboutContact followContact contactAnimation">
                    <img src={require('./images/gmail-logo.png')}alt='gmail logo' width={10} height={10}px></img>
                    PARGdevelopers@gmail.com</p>
                <p className='aboutContact contactlogo1 followContact contactAnimation'>
                    <img src={require('./images/instagram-logo.jpg')} alt='insta logo' width={10} height={10}px></img>
                    <a href="https://www.instagram.com/parg_developers/">Instagram</a>
                </p>
                <p className="aboutContact contactlogo2 followContact contactAnimation">
                    <img src={require('./images/whatsapp-logo.png')} alt='whatsapp logo' width={10} height={10}px></img>
                    9790665224
                </p>
            </div>
        </div>
    </div>
  )
}

export default Contact