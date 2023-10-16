import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import Folow from './Folow';
import Search from "./Search";
import headBg from './video/headBg.mp4'

const Header = ({search,setsearch,search2,setsearch2}) => {
  const [followToggle,setfollowToggle]=useState(false)
  return (
    <header>
        <video autoPlay muted loop className='headerVideo'>
          <source src={headBg} type='video/mp4'/>
        </video>
              <h1>WELCOME TO AI HUB</h1>
              <Search
                      search={search}
                      setsearch={setsearch}
                      search2={search2}
                      setsearch2={setsearch2}
                />  
              {followToggle? (<Folow />) : ''}
              <div className='headerButton'>
                  <button className='headerLink follow1'
                    onClick={()=>setfollowToggle(!followToggle)}
                  >FOLLOW</button>
                  <Link to='/contact' className='headerLink contact1'>CONTACT</Link>
                  <Link to='about' className='headerLink about1'>ABOUT</Link>
                  <Link to='/suggestions' className='headerLink suggession1'>SUGGESTIONS</Link>
              </div>
    </header>
  )
}

export default Header