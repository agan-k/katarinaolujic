import React, { Component } from 'react'

import Header from '../Header.jsx'

import Square from './Square'
import ViewCamer from './ViewCamera'
import Standard from './Standard'
import Book from './Book'


export default class Photo extends Component {
   render() {
      return (
         <div className='photo container'>
            <Header/>
            <p>photos here</p>
         </div>
      )
   }
}
