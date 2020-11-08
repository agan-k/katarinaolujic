import React from 'react'

import Nav from '../Nav'

import banner_logo from '../assets/banner_logo.jpg'

function Home() {
   return (
      <div className='home'>
         <div className='banner'>
            <img src={banner_logo} />
            <div className='nav-container'>
               <Nav />
            </div>
         </div>
         
         
      </div>
   )
}

export default Home
