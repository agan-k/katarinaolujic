import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom"

import photo_btn from './assets/nav/photo_btn.jpg'
import paintings_btn from './assets/nav/paintings_btn.jpg'
import bio_btn from './assets/nav/bio_btn.jpg'
import links_btn from './assets/nav/links_btn.jpg'
import contact_btn from './assets/nav/contact_btn.jpg'
import store_btn from './assets/nav/store_btn.jpg'

export default class Nav extends Component {
   render() {
      return (
         <div>
            <nav>
               <li><Link to='/photo'><img src={photo_btn} alt='photo'/></Link></li>
               <li><Link to='/paintings'><img src={paintings_btn} alt='paintings'/></Link></li>
               <li><Link to='/bio'><img src={bio_btn} alt='bio'/></Link></li>
               <li><Link to='/links'><img src={links_btn} alt='links'/></Link></li>
               <li><Link to='/contact'><img src={contact_btn} alt='contact'/></Link></li>
               <li><a href='https://www.etsy.com/shop/redkatart'><img src={store_btn} alt='store'/></a></li>
            </nav>
         </div>
      )
   }
}
