import React, { Component } from 'react'

import Header from './Header.jsx'

export default class Contact extends Component {
   render() {
      return (
         <div className='contact container'>
            <Header />
            <div className='contact wrapper'>
               <p>Contact here</p>
            </div>
         </div>
      )
   }
}
