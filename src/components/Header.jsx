import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom"

import Nav from '../Nav'


export default class Header extends Component {
   render() {
      return (
         <header>
            <h1><Link to='/'>KatarinaOlujic.com</Link></h1>
            <div className='nav-container'>
               <Nav/>
            </div>
         </header>
      )
   }
}
