import React, {useState } from 'react'
const ListItems = ({singleAI}) => {
  const [toggle,settoggle]=useState(false)
  const path=singleAI.path
  return (
    <div className='singleAIButton'>
      {toggle? ''
      : ''}
        <li className='aiButton'>
          <button
              onClick={(e)=>settoggle(true)}
          >
            <img className='aiLogo' alt='logo' src={require(`${path}`)} loading='lazy'></img>
          </button>
        </li>
    </div>
  )
}

export default ListItems