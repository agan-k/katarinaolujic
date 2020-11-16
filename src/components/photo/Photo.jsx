import React, { Component } from 'react'

import Header from '../Header.jsx'
import Footer from '../Footer.jsx'


import Slide from '../Slide'
import photoSqData from './photoSqData.js'
import photoVcData from './photoVcData.js'
import photoStData from './photoStData.js'
import photoBkData from './photoBkData.js'


export default class Photo extends Component {
   constructor(props) {
      super()
      this.state = {
         sqrSectionShowing: false,
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

   handleToggleSqrSection = () => {
      this.setState({
         sqrSectionShowing: !this.state.sqrSectionShowing,
         bookSectionShowing: false,
         vcSectionShowing: false,
         stndSectionShowing: false
      })
   }
   handleToggleBookSection = () => {
      this.setState({
         bookSectionShowing: !this.state.bookSectionShowing,
         sqrSectionShowing: false,
         vcSectionShowing: false,
         stndSectionShowing: false
      })
   }
   handleToggleVcSection = () => {
      this.setState({
         vcSectionShowing: !this.state.vcSectionShowing,
         sqrSectionShowing: false,
         bookSectionShowing: false,
         stndSectionShowing: false

      })
   }
   handleToggleStndSection = () => {
      this.setState({
         stndSectionShowing: !this.state.stndSectionShowing,
         sqrSectionShowing: false,
         bookSectionShowing: false,
         vcSectionShowing: false
      })
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
         <div className='thumbnail-container sq'>
            <img src={item.img} onClick={() => this.handleSqSlideSelect(item, index)}/>
         </div>
      )
      const book = photoBkData.map((item, index) =>
         <div className='thumbnail-container bk'>
            <img src={item.img} onClick={() => this.handleBkSlideSelect(item, index)}/>
         </div>
      )
      const view_camera_collection = photoVcData.map((item, index) =>
         <div className='thumbnail-container vc'>
            <img src={item.img} onClick={() => this.handleVcSlideSelect(item, index)}/>
         </div>
      )
      const standard_collection = photoStData.map((item, index) =>
         item.vertical ? 
         <div className='thumbnail-container vertical st'>
            <img src={item.img} onClick={() => this.handleStSlideSelect(item, index)}/>
         </div> :
         <div className='thumbnail-container horizontal st'>
            <img src={item.img} onClick={() => this.handleStSlideSelect(item, index)}/>
         </div>
      )
      

      return (
         <div>
            <Header />
            <div className='photo container'>
               {/* --------------------------------- */}
               <div className='section square-format'>
                  <p onClick={() => this.handleToggleSqrSection()} style={{cursor: 'pointer'}}>220mm Square Format:</p>
                  <div className={`${this.state.sqrSectionShowing ? 'sq-frmt' : ''} gallery`}>
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
               <div className='section book'>
                  <p onClick={() => this.handleToggleBookSection()} style={{cursor: 'pointer'}}> Book 'Silence':</p>
                  <div className={`${this.state.bookSectionShowing ? 'book' : ''} gallery`}>
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
               <div className='section view-camera'>
                  <p onClick={() => this.handleToggleVcSection()} style={{cursor: 'pointer'}}>4x5 View Camera:</p>
                  <div className={`${this.state.vcSectionShowing ? 'view-camera' : ''} gallery`}>
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
               <div className='section standard'>
                  <p onClick={() => this.handleToggleStndSection()} style={{cursor: 'pointer'}}>35mm Standard:</p>
                  <div className={`${this.state.stndSectionShowing ? 'standard' : ''} gallery`}>
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
            <Footer />
         </div>
      )
   }
}
