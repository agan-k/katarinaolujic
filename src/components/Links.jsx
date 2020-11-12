import React, { Component } from 'react'

import Header from './Header.jsx'

export default class Links extends Component {
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   render() {
      return (
         <div className='links container'>
            <Header />
            <div className='links wrapper'>
               <h2>Links:</h2>
               <p><a href='http://katarinaolujic.com'>KatarinaOlujic.com</a>- legacy site</p>
               <p><a href='https://www.abelardomorell.net/'>abelardo morell</a>- artist</p>
               <p><a href='http://www.davidhilliard.com/'>dave hillard</a>- artist</p>
               <p><a href='https://lauramcphee.com/'>laura mcphee</a>- artist</p>
            </div>
         </div>
      )
   }
}
