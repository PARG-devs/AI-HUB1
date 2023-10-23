import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import {Link} from 'react-router-dom';

const AiPopUpPage = ({singleAI,settoggle}) => {
    const path=singleAI.path
  return (
    <div className='AiPopUp'>
       <span className='PopUpTop'>
            <h1>{singleAI.name}</h1>
            <AiOutlineCloseCircle 
                onClick={()=>settoggle(false)}
            />
        </span>
        <p>{singleAI.description}</p>
        
        <div className='visitLink'>
            <Link to={singleAI.link} >Visit</Link>
        </div>
    </div>
  )
}

export default AiPopUpPage