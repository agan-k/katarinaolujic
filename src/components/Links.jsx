import React, { Component } from 'react'

import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default class Links extends Component {
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   render() {
      return (
         <div>
            <Header />
            <div className='links container'>
               
               <div className='links-list'>
                  <p><a href='http://katarinaolujic.com'>KatarinaOlujic.com</a>&nbsp;- legacy site</p>
                  <p><a href='https://www.abelardomorell.net/'>abelardo morell</a>&nbsp;- artist</p>
                  <p><a href='http://www.davidhilliard.com/'>dave hillard</a>&nbsp;- artist</p>
                  <p><a href='https://lauramcphee.com/'>laura mcphee</a>&nbsp;- artist</p>
               </div>
            
            </div>
            <Footer />
         </div>
      )
   }
}
