import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom"


export default class Header extends Component {
   render() {
      return (
         <header>
            <nav>
               <li><Link to='/photo'>photo</Link></li>
               <li><Link to='/paintings'>paintings</Link></li>
               <li><Link to='/bio'>bio</Link></li>
               <li><Link to='/links'>links</Link></li>
               <li><Link to='/contact'>contact</Link></li>
               <li><a href='https://www.etsy.com/shop/redkatart'>store</a></li>
            </nav>
         </header>
      )
   }
}
