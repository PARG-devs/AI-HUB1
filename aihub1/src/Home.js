import React from 'react'
import Header from './Header'
import Main from './Main'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'

const Home = ({search,setsearch,search2,setsearch2}) => {
  return (
    <div className='Home'>
        <Header 
            search={search}
            setsearch={setsearch}
            search2={search2}
            setsearch2={setsearch2}
        />
        <Main 
            search={search}
            search2={search2}
        />

        <Footer />
        
        <Outlet />
    </div>
  )
}

export default Home