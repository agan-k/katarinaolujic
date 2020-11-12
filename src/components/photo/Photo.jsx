import React, { Component } from 'react'

import Header from '../Header.jsx'


import Slide from '../Slide'
import photoSqData from './photoSqData.js'
import photoVcData from './photoVcData.js'
import photoStData from './photoStData.js'
import photoBkData from './photoBkData.js'


export default class Photo extends Component {
   constructor(props) {
      super()
      this.state = {
         slideShowing: false,
         index: null,
         sq_collection: false,
         vc_collection: false,
         st_collection: false,
         book: false,
      }
      this.baseState = this.state
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }

   handleSqSlideSelect = (item, index) => {
      this.setState({
         slideShowing: true,
         index: index,
         sq_collection: true
      })
   }
   handleVcSlideSelect = (item, index) => {
      this.setState({
         slideShowing: true,
         index: index,
         vc_collection: true
      })
   }
   handleStSlideSelect = (item, index) => {
      this.setState({
         slideShowing: true,
         index: index,
         st_collection: true
      })
   }
   handleBkSlideSelect = (item, index) => {
      this.setState({
         slideShowing: true,
         index: index,
         book: true
      })
   }
   closeSlide = () => {
      this.setState({
         slideShowing: false
      })
      this.setState(this.baseState)
   }
   render() {
      const sq_format_collection = photoSqData.map((item, index) =>
         <div className='gallery-img-container sq'>
            <img src={item.img} onClick={() => this.handleSqSlideSelect(item, index)}/>
         </div>
      )
      const view_camera_collection = photoVcData.map((item, index) =>
         <div className='gallery-img-container vc'>
            <img src={item.img} onClick={() => this.handleVcSlideSelect(item, index)}/>
         </div>
      )
      const standard_collection = photoStData.map((item, index) =>
         <div className='gallery-img-container st'>
            <img src={item.img} onClick={() => this.handleStSlideSelect(item, index)}/>
         </div>
      )
      const book = photoBkData.map((item, index) =>
         <div className='gallery-img-container bk'>
            <img src={item.img} onClick={() => this.handleBkSlideSelect(item, index)}/>
         </div>
      )

      return (
         <div className='photo container'>
            <Header />
            {/* --------------------------------- */}
            <div className='square-format wrapper'>
               <p>220mm Square Format:</p>
               <div className='sq-format gallery'>
                  {sq_format_collection}
               </div>
            </div>
            {this.state.slideShowing &&  this.state.sq_collection && (
               <Slide
                  index={this.state.index}
                  closeSlide={this.closeSlide}
                  collection={photoSqData}
               />
            )}
            {/* --------------------------------- */}
            <div className='book wrapper'>
               <p>Book 'Silence':</p>
               <div className='book gallery'>
                  {book[0]}
               </div>
            </div>
            {this.state.slideShowing && this.state.book && (
               <Slide
                  index={this.state.index}
                  closeSlide={this.closeSlide}
                  collection={photoBkData}
               />
            )}
            {/* --------------------------------- */}
            <div className='view-camera wrapper'>
               <p>4x5 View Camera:</p>
               <div className='view-camera gallery'>
                  {view_camera_collection}
               </div>
            </div>
            {this.state.slideShowing && this.state.vc_collection && (
               <Slide
                  index={this.state.index}
                  closeSlide={this.closeSlide}
                  collection={photoVcData}
               />
            )}
            {/* --------------------------------- */}
            <div className='35mm-standard wrapper'>
               <p>35mm Standard:</p>
               <div className='standard gallery'>
                  {standard_collection}
               </div>
            </div>
            {this.state.slideShowing && this.state.st_collection && (
               <Slide
                  index={this.state.index}
                  closeSlide={this.closeSlide}
                  collection={photoStData}
               />
            )}
         </div>
      )
   }
}
