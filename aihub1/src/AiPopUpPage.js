import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";

const AiPopUpPage = ({singleAI,settoggle}) => {
    const path=singleAI.path
  return (
  
        
        <div className='visitLink'>
            <a href={singleAI.link} >Visit</a>
        </div>

  )
}

export default AiPopUpPage