import React, { Component } from 'react'

import Header from './Header'
import Slide from './Slide'
import paintingsData from './paintingsData'

export default class Paintings extends Component {
   constructor() {
      super()
      this.state = {
         slideShowing: false
      }
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   handleSlideSelect = (item, index) => {
      this.setState({
         slideShowing: true,
         index: index
      })
   }
   closeSlide = () => {
      this.setState({
         slideShowing: false
      })
   }
   render() {
      const paintings = paintingsData.map((item, index) => 
         <div className='gallery-img-container paintings'>
            <img src={item.img} onClick={() => this.handleSlideSelect(item, index)}/>
         </div>
      )
      return (
         <div className='paintings-container'>
            <Header/>
            <div className='paintings wrapper'>
               <p>Paintings:</p>
               <div className='paintings gallery'>
                  {paintings}
               </div>
            </div>
            {this.state.slideShowing && (
               <Slide
                  index={this.state.index}
                  closeSlide={this.closeSlide}
                  collection={paintingsData}
               />
            )}
         </div>
      )
   }
}
