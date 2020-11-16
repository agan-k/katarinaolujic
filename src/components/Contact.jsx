import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import email from '../assets/content/email.jpg'

export default class Contact extends Component {
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   render() {
      return (
         <div>
            <Header />
            <div className='contact container'>
               <div className='contact wrapper'>
                  <h2>To get in touch write to:</h2>
                  <p><img src={email} style={{height: '1.9em'}}/></p>
                  {/* <p><a href='https://www.instagram.com/redkatart/'>instagram</a></p>
                  <p><a href='https://www.instagram.com/redkatart/'>instagram</a></p> */}
               </div>
            </div>
            <Footer />
         </div>
      )
   }
}
