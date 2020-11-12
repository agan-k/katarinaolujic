import React from 'react'

export default function Footer() {
   return (
      <div className='footer-container'>
         <p style={{
            fontFamily: 'Helvetica',
            fontSize: '.8em',
            fontWeight: '100',
            color: 'rgb(91, 91, 91)',
            textAlign: 'center'
         }}>
            site:&nbsp;
            <a href='http://formversuscontent.com'>
               FormVersusContent
            </a>
            <br/>
            katarina olujic&nbsp; &#169; &nbsp;2020
         </p>
      </div>
   )
}
