import React from 'react'
import bgImage from './video/BotTyping1.mp4'

const Interface = ({setSwitchtoggel}) => {
  const random = Math.floor(Math.random()*2)
  return (
    <div className='interface'>
      {random === 1 ? 
          <video autoPlay loop muted className='bgVideo'>
            <source src={bgImage} type='video/mp4' />
            Loading...
          </video> :
          <video autoPlay loop muted className='bgVideo'>
            <source src={bgImage} type='video/mp4' />
            Loading...
          </video>
      }
      <div className='textBg'>
        <p>GET THINGS DONE WITH AI</p>
          <button 
              onClick={()=>setSwitchtoggel(true)}
          >Get Started</button>
      </div>
    </div>
  )
}

export default Interface