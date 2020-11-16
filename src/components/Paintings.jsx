import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
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
         <div className='thumbnail-container paintings'>
            <img src={item.img} onClick={() => this.handleSlideSelect(item, index)}/>
         </div>
      )
      return (
         <div>
            <Header/>
            <div className='paintings-container'>
               <div className='paintings section'>
                  <p>Paintings:</p>
                  <div className='gallery paintings'>
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
            <Footer />
         </div>
      )
   }
}
