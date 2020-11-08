import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom"

import Nav from '../Nav'

import banner_logo from '../assets/banner_logo.jpg'

export default class Header extends Component {
   render() {
      return (
         <header>
            <h1>KatarinaOlujic.com</h1>
            <Link to='/'>
               <div id='logo'>
                  <img src={banner_logo} alt='KatarinaOlujic.com' />
               </div>
            </Link>
            <div className='nav-container'>
               <Nav/>
            </div>
         </header>
      )
   }
}
