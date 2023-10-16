import React from 'react'
import { useState } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
const Suggestion = ({navigate}) => {
    const[toggleSubmit,setToggleSubmit]=useState("False")
    const handleSuggestion=(e)=>{
        e.preventDefault()
        setToggleSubmit("True")
    }
  return (
    <div className="suggestion">
        <span className='aboutTop'>
            <h1>Suggestions:</h1>
            <AiOutlineCloseCircle 
                onClick={()=>navigate('/')}
            />
        </span>
            {toggleSubmit==="False"?(
            <form onSubmit={(e)=>handleSuggestion(e)} className="form">
                <div className='form1'>
                    <label htmlFor='Name' className="label">Your Name:</label>
                        <input type="text" 
                            placeholder='Name'
                            required
                            id='Name' className="input"
                            />
                </div>
                <div className='form1'>
                        <label htmlFor='Feedback'className="label" style={{position:"fixed",left:"10000px"}}>Feedback:</label>
                        <textarea type="text"
                        placeholder="Give Your Feedback"
                        required className="input"
                        />
                </div>
                <button type='submit'>submit</button> 
            </form>)
            
            : 
            (
                <div className="image">
                    <img src={require('./images/tick-mark.png')} alt='successful submission' width={10} height={20}px></img>
                    <p> Your Suggestion was submitted</p>
                </div>
            )}
  </div>)
}

export default Suggestion