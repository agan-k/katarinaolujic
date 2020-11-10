import React, { Component } from 'react'

import Header from '../Header.jsx'


import ImageDetail from '../ImageDetail'
import photoSqData from './photoSqData.js'
import photoVcData from './photoVcData.js'
import photoStData from './photoStData.js'


export default class Photo extends Component {
   constructor(props) {
      super()
      this.state = {
         isShowing: false,
         index: null,
         sq_collection: false,
         vc_collection: false,
         st_collection: false,
      }
      this.baseState = this.state
   }
   handleSqImageSelect = (item, index) => {
      this.setState({
         isShowing: true,
         index: index,
         sq_collection: true
         
      })
   }
   handleVcImageSelect = (item, index) => {
      this.setState({
         isShowing: true,
         index: index,
         vc_collection: true
      })
   }
   handleStImageSelect = (item, index) => {
      this.setState({
         isShowing: true,
         index: index,
         st_collection: true
      })
   }
   closeImageDetail = () => {
      this.setState({
         isShowing: false
      })
      this.setState(this.baseState)
   }
   render() {
      const sq_format_collection = photoSqData.map((item, index) =>
         <div className='gallery-img-container sq'>
            <img src={item.img} onClick={() => this.handleSqImageSelect(item, index)}/>
         </div>
      )
      const view_camera_collection = photoVcData.map((item, index) =>
         <div className='gallery-img-container vc'>
            <img src={item.img} onClick={() => this.handleVcImageSelect(item, index)}/>
         </div>
      )
      const standard_collection = photoStData.map((item, index) =>
         <div className='gallery-img-container st'>
            <img src={item.img} onClick={() => this.handleStImageSelect(item, index)}/>
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
            {this.state.isShowing &&  this.state.sq_collection && (
               <ImageDetail
                  index={this.state.index}
                  closeImageDetail={this.closeImageDetail}
                  collection={photoSqData}
               />
            )}
            <div className='view-camera wrapper'>
               <p>4x5 View Camera:</p>
               <div className='view-camera gallery'>
                  {view_camera_collection}
               </div>
            </div>
            {this.state.isShowing && this.state.vc_collection && (
               <ImageDetail
                  index={this.state.index}
                  closeImageDetail={this.closeImageDetail}
                  collection={photoVcData}
               />
            )}
            <div className='35mm-standard wrapper'>
               <p>35mm Standard:</p>
               <div className='standard gallery'>
                  {standard_collection}
               </div>
            </div>
            {this.state.isShowing && this.state.st_collection && (
               <ImageDetail
                  index={this.state.index}
                  closeImageDetail={this.closeImageDetail}
                  collection={photoStData}
               />
            )}
            <div className='book wrapper'>
               <p>Book 'Silence':</p>
            </div>
            {/* {this.state.isShowing && this.state.book_collection && (
               <ImageDetail
                  index={this.state.index}
                  closeImageDetail={this.closeImageDetail}
                  collection={photoBookData}
               />
            )} */}
         </div>
      )
   }
}
