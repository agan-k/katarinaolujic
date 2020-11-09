import React, { Component } from 'react'

import Header from '../Header.jsx'

import Square from './Square'
import ViewCamer from './ViewCamera'
import Standard from './Standard'
import Book from './Book'
import ImageDetail from '../ImageDetail'
import photoData from './photoData.js'


export default class Photo extends Component {
   constructor(props) {
      super()
      this.state = {
         isShowing: false,
         index: null 
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
      
      const sq_format_collection = photoData.filter(item => item.square_format).map((item, index) =>
         <div className='sq-format-img-container'>
            <img src={item.img} onClick={() => this.handleImageSelect(item, index)}/>
         </div>
      )
      const view_camera_collection = photoData.filter(item => item.view_camera).map((item, index) =>
         <div className='sq-format-img-container'>
            <img src={item.img} onClick={() => this.handleImageSelect(item, index)}/>
         </div>
      )
      return (
         <div className='photo container'>
            <Header />
            <div className='square-format wrapper'>
               <p>220mm Square Format:</p>
               <div className='sq-format gallery'>
                  {sq_format_collection}
               </div>
            </div>
            <div className='view-camera wrapper'>
               <p>4x5 View Camera:</p>
               <div className='view-camera gallery'>
                  {view_camera_collection}
               </div>
            </div>
            <div className='35mm-standard wrapper'>
               <p>35mm Standard:</p>
            </div>
            <div className='book wrapper'>
               <p>Book 'Silence':</p>
            </div>
            {this.state.isShowing && (
               <ImageDetail
                  index={this.state.index}
                  closeImageDetail={this.closeImageDetail}
                  photoData={photoData}
                  sq_format_collection={sq_format_collection}
               />
            )}
         </div>
      )
   }
}
