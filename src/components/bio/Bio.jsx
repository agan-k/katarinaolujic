import React, { Component } from 'react'

import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Slide from '../Slide'

import exhibitionsData from './exhibitionsData'
import mag_featureData from './mag_featureData'
import workData from './workData'
import ImageDetail from '../ImageDetail.jsx'

import bio_pic from '../../assets/photo/square/003.jpg'
import make_use from '../../assets/content/publications/make_use_all.jpg'


export default class Bio extends Component {
   constructor() {
      super()
      this.state = {
         exhibitions: false,
         work: false,
         magFeature: false,
         slideShowing: false,
         imageDetailShowing: false
      }
      this.baseState = this.state
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   handleExhSlideSelect = (item, index) => {
      this.setState({
         exhibitions: true,
         slideShowing: true,
         index: index
      })
   }
   handleWrkSlideSelect = (item, index) => {
      this.setState({
         work: true,
         slideShowing: true,
         index: index
      })
   }
   handleMagSlideSelect = (item, index) => {
      this.setState({
         magFeature: true,
         slideShowing: true,
         index: index
      })
   }
   closeSlide = () => {
      this.setState({
         slideShowing: false
      })
      this.setState(this.baseState)
   }
   handleOneSelect = () => {
      this.setState({
         imageDetailShowing: true
      })
   }
   closeOneSelect = () => {
      this.setState({
         imageDetailShowing: false
      })
   }
   render() {
      const exhibitions_slides = exhibitionsData.map((item, index) => 
         <div className='thumbnail-container bio'>
            <img src={item.img} onClick={() => this.handleExhSlideSelect(item, index)}/>
         </div>
         )
      const work_slides = workData.map((item, index) => 
         <div className='thumbnail-container bio'>
            <img src={item.img} onClick={() => this.handleWrkSlideSelect(item, index)}/>
         </div>
         )
      const mag_slides = mag_featureData.map((item, index) => 
         <div className='thumbnail-container bio'>
            <img src={item.img} onClick={() => this.handleMagSlideSelect(item, index)}/>
         </div>
         )
      return (
         <div>
            <Header />
            <div className='bio container'>
               {/* <div className='bio wrapper'> */}
                  <img
                     src={bio_pic}
                     style={{
                        height: '10em', 
                        margin: '0 2em 0 10em',
                        cursor: 'pointer'
                     }}
                  />
                  <div>
                     <p>
                        Katarina was born in Derventa, a small town in the northern part of Bosnia-Herzegovina.
                        Even as a child she was fascinated by the colors and shapes of surrounding places. 
                        Art was her main hobby throughout the school years and it remained as such until she 
                        moved to Boston, USA. In Boston, with new horizons opening, she decided to take the 
                        opportunity and get a college degree in fine arts. In May 2006 she graduated Bachelors 
                        of Fine Arts, majoring in photography, at Massachusetts College of Art. Currently she 
                        resides in Brooklyn, NY.
                     </p>
                     <h2>Exhibitions:</h2>
                     <ul>
                        <li>
                           September 14th 2008-January 17th 2009, Art at Urban 326 7th ave. Brooklyn, NY 11215
                        </li>
                        <li>
                           October 2007-January 2008 at Sabur, Somerville , MA
                        </li>
                        <li>
                           May 2006 - Tower Gallery, Massachusetts College of Art, final thesis graduating photo group show.
                        </li>
                        <li>
                           April 2006 - Student Life Gallery, installation station, Massachusetts College of Art. "Crossroads" 
                           a show she shared with a colleague Camille Maye, ceramics major, as an conclusion to a four year
                           journey. 
                        </li>
                        <li>
                           February 2006 - A4 Gallery, Massachusetts College of Art, senior photo thesis show.
                        </li>
                     </ul>
                     <div className='gallery bio'>
                        {exhibitions_slides}
                     </div>
                     {this.state.slideShowing && this.state.exhibitions && (
                     <Slide
                        index={this.state.index}
                        closeSlide={this.closeSlide}
                        collection={exhibitionsData}
                     />
                     )}
                     <h2>Internship:</h2>
                     <p>
                        Feb-Jun 2003, Know Your Boston Magazine, Boston MA. A monthly event guide and entertainment
                        magazine. She was a staff photographer. Her images appear in four issues of this magazine, and
                        on a front page of the February issue.
                     </p>
                     <div className='gallery bio'>
                        {work_slides}
                     </div>
                     {this.state.slideShowing && this.state.work && (
                     <Slide
                        index={this.state.index}
                        closeSlide={this.closeSlide}
                        collection={workData}
                     />
                     )}
                     <h2>Publications:</h2>
                     <p>
                        "Make Use" 2006, a collection of photographs, senior photo thesis of graduating class 2006.
                     </p>
                     <div className='thumbnail bio'>
                        <img src={make_use} onClick={() => this.handleOneSelect()} />
                     </div>
                     {this.state.imageDetailShowing && (
                     <ImageDetail
                        image={make_use}
                        closeOneSelect={this.closeOneSelect}
                     />
                     )}
                     <h2>Press:</h2>
                     <p>
                        "Max Magazine" major Bosnian art and culture magazine, August 2006, featured artist article.
                     </p>
                     <div className='gallery bio'>
                        {mag_slides}
                     </div>
                     {this.state.slideShowing && this.state.magFeature && (
                     <Slide
                        index={this.state.index}
                        closeSlide={this.closeSlide}
                        collection={mag_featureData}
                     />
                     )}
                  </div>
               {/* </div> */}
            </div>
            <Footer />
         </div>
      )
   }
}
