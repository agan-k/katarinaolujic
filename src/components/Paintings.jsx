import React, { Component } from 'react'

import Header from './Header'
import ImageDetail from './ImageDetail'
import paintingsData from './paintingsData'

export default class Paintings extends Component {
   constructor() {
      super()
      this.state = {
         isShowing: false
      }
   }
   handleImageSelect = (item, index) => {
      this.setState({
         isShowing: true,
         index: index
      })
   }
   closeImageDetail = () => {
      this.setState({
         isShowing: false
      })
   }
   render() {
      const paintings = paintingsData.map((item, index) => 
         <div className='gallery-img-container paintings'>
            <img src={item.img} onClick={() => this.handleImageSelect(item, index)}/>
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
            {this.state.isShowing && (
               <ImageDetail
                  index={this.state.index}
                  closeImageDetail={this.closeImageDetail}
                  collection={paintingsData}
               />
            )}
         </div>
      )
   }
}
