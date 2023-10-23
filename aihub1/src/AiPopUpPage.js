import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";

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
        {/*  <div className='popupLogo'>
            <img  alt='logo' src={require(`${path}`)}></img>
        </div>*/}
        <div className='visitLink'>
            <a href={singleAI.link} >Visit</a>
        </div>
    </div>
  )
}

export default AiPopUpPage