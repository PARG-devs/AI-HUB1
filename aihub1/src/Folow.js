import React from 'react';

const Folow = () => {
  return (
    <div className='followPage'>
        <a className='aboutContact followContact' href="https://www.instagram.com/agdevops?igsh=eGM0MGYzcXN6c2Jj">
                <img style={{width:'1.5rem',height:'1.5rem'}} src={require('./images/instagram-logo.jpg')} alt='successful submission' width={10} height={20}px></img>
                Instagram 
        </a>
        <a className='aboutContact followContact' href="https://x.com/AGdevopss?t=R5FgHL8hB89gtolYMVcvYQ&s=08">
                <img style={{width:'1.5rem',height:'1.5rem'}} src={require('./images/threads-logo.jpg')} alt='successful submission' width={10} height={20}px></img>
                Threads
        </a>
    </div>
  )
}

export default Folow