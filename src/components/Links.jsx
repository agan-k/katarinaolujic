import React, { Component } from 'react'

import Header from './Header.jsx'

export default class Links extends Component {
   render() {
      return (
         <div className='links container'>
            <Header />
            <div className='links wrapper'>
               <p>Links here</p>
            </div>
         </div>
      )
   }
}
