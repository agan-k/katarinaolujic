import React, { Component } from 'react'

export default class ImageDetail extends Component {
   constructor() {
      super()
   }
   render() {
      return (
         <div className='image-detail-container'>
            <div className='close-image-detail' onClick={this.props.closeOneSelect}>
               &times;
            </div>
            <div className='image-detail-box'>
               <div className='image-detail'>
                  <img src={this.props.image}/>
               </div>
            </div>
         </div>
      )
   }
}
