import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";

const About = ({navigate}) => {

  return (
    <div className="About">
        <span className='aboutTop'>
            <h1>ABOUT:</h1>
            <AiOutlineCloseCircle 
                onClick={()=>navigate('/')}
            />
        </span>
            <div className='aboutanimae'>
                <div className='aboutScroll'>
                    <p className='aboutanimae2'>Thanks For Visiting AI HUB.You Can Find All Exciting AI Tools Here,Which Includes Both Paid and Un paid.
                    An AI tool is a software application that uses artificial intelligence algorithms to perform specific tasks and solve problems.
                    You Can Use These Tools For Your Projects.We covered all AI tools available for commercial use.If we missed any AI tool or If you have 
                    any suggestions and feedback,feel free to inform us via "SUGGESTIONS".</p>
                    <p className='aboutanimae2'><span className='subheading'>NOTE:</span> you can find "SUGGESTIONS" tab in the home page.</p>
                    <p className='aboutanimae2'>this website is developed by 'PARG developing agencies'.</p>
                    <p className='aboutContact aboutanimae2'>
                        <span className='subheading'>Contact PARG: </span>
                        <a className='aboutContact' href="https://www.instagram.com/parg_developers/">
                            <img style={{width:'1.5rem',height:'1.5rem'}} src={require('./images/instagram-logo.jpg')} alt='successful submission' width={10} height={20}px></img>
                            Instagram
                        </a>
                    </p>
                </div>
            </div>
    </div>
  )
}

export default About